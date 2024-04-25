import Transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";
import Filter from "bad-words";

/**
 * @typedef {object} TransactionUpdate
 * @property {string} type of transaction - "Income" or "Expense"
 * @property {string} category - ObjectId of the transaction category from MongoDB
 * @property {number} sum - Sum of transaction
 * @property {string} comment - Comment of transaction
 * @property {date} date.required - Date of transaction
 */

/**
 * PATCH /api/transactions/{id}
 * @tags Transactions
 * @security BearerAuth
 * @param {string} id.path.required - ID of the transaction to update
 * @param {TransactionUpdate} request.body.required - Data to update the transaction
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 403 - Forbidden (No authorization or not owner of the transaction)
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

const customList = [
  // Odmiany słowa "kurwa"
  "kurwa",
  "kurwie",
  "kurwą",
  "kurwę",
  "kurwe",
  "kurwo",
  "kurwy",
  "kurwach",
  "kurew",
  "kurwami",
  "kurwiska",
  "kurwiszcze",
  "kurwiszon",
  "kurwiszony",
  "kurwiszonów",
  "kurwojady",
  "kurwojadów",

  // Odmiany słowa "chuj"
  "chuj",
  "chuja",
  "chujem",
  "chuju",
  "chujowi",
  "chujów",
  "chuje",
  "chujek",
  "chujami",
  "chujoza",
  "chujnia",
  "chujowy",
  "chujowa",
  "chujowe",

  // Odmiany słowa "pierdolić"
  "pierdolę",
  "pierdolić",
  "pierdolisz",
  "pierdoli",
  "pierdolą",
  "pierdolony",
  "pierdolona",
  "pierdolone",
  "pierdolęcie",
  "pierdolenie",
  "pierdolnięty",
  "pierdolnięta",
  "pierdolnięte",
  "spierdolić",
  "spierdolił",
  "opierdolić",
  "opierdol",
  "opierdoli",
  "opierdala",

  // Odmiany słowa "jebać"
  "jebać",
  "jeb",
  "jebie",
  "jebię",
  "jebiesz",
  "jebią",
  "jebadło",
  "jebadlo",
  "jebany",
  "jebana",
  "jebane",
  "jebanka",
  "jebanko",
  "wyjebać",
  "wyjebie",
  "wyjebią",
  "wyjebiesz",
  "wyjebali",
  "zajebisty",
  "zajebista",
  "zajebiste",
  "zajebać",
  "zajebie",
  "zajebią",
  "zajebiesz",
  "zajebali",
  "zjebać",
  "zjebie",
  "zjebią",
  "zjebiesz",
  "zjebane",
  "dojebać",
  "dojebie",
  "dojebią",
  "dojebiesz",
  "dojebane",

  // Odmiany słowa "spierdalać"
  "spierdalaj",
  "spierdalać",
  "spierdalam",
  "spierdalają",
  "spierdalał",
  "spierdalała",
  "spierdalajcie",
  "spierdolić",
  "spierdoli",
  "spierdolą",
  "spierdolił",
  "spierdoliła",
  "spierdoliło",
  "spierdolisz",
  "spierdolicie",
  "pospierdalać",
  "pospierdalaj",
  "pospierdala",
  "pospierdali",

  // Odmiany słowa "pizda"
  "pizda",
  "pizdzie",
  "pizdą",
  "pizdu",
  "pizdy",
  "pizdom",
  "pizdach",
  "pizdami",

  // Inne wulgaryzmy i ich odmiany
  "cipa",
  "kutas",
  "debil",
  "debilny",
  "cipie",
  "cipą",
  "cipę",
  "cipy",
  "cipach",
  "cipami",
  "dupa",
  "dupie",
  "dupą",
  "dupę",
  "dupy",
  "dupach",
  "dupami",
  "huj",
  "huja",
  "hujowi",
  "hujem",
  "huju",
  "hujów",
  "huje",
  "hujami",
  "dziwka",
  "dziwki",
  "dziwce",
  "dziwkę",
  "dziwko",
  "dziwek",
  "dziwką",
  "dziwkami",
  "dziwkach",
  "cipa",
  "cipie",
  "cipą",
  "cipę",
  "cipy",
  "cipach",
  "cipami",
  "dupa",
  "dupie",
  "dupą",
  "dupę",
  "dupy",
  "dupach",
  "dupami",
  "huj",
  "huja",
  "hujowi",
  "hujem",
  "huju",
  "hujów",
  "huje",
  "hujami",
  "kuriwszcz",

  // Błędne wersje literowe popularnych wulgaryzmów
  "kórwa",
  "kórwę",
  "kvrwa",
  "chvuj",
  "pierdvlę",
  "jebvny",
  "spierdvlaj",
  "pizdva",
];

const customFilter = new Filter({ emptyList: true });
customFilter.addWords(...customList);

function createProfanityRegex(words) {
  const pattern = words
    .map((word) =>
      word
        .replace(/a/g, "[aą]")
        .replace(/c/g, "[cć]")
        .replace(/e/g, "[eę]")
        .replace(/l/g, "[lł]")
        .replace(/n/g, "[nń]")
        .replace(/o/g, "[oó]")
        .replace(/s/g, "[sś]")
        .replace(/z/g, "[zźż]")
        .split("")
        .join("\\W*")
    )
    .join("|");

  return new RegExp(`(${pattern})`, "gi");
}

const profanityRegex = createProfanityRegex(customList);

export const updateTransaction = async (req, res) => {
  const ownerId = req.user.id;
  const { id } = req.params;
  const { type, category, sum, comment, date } = req.body;

  try {
    const ourTransaction = await Transaction.findOne({
      _id: id,
      owner: ownerId,
    });

    if (!ourTransaction) {
      return res
        .status(403)
        .json({ description: "You don't have permission to do this" });
    }

    if (
      comment &&
      (comment.length > 100 ||
        customFilter.isProfane(comment) ||
        profanityRegex.test(comment))
    ) {
      return res.status(400).json({
        statusCode: 400,
        description: "Comment is too long or contains prohibited words",
      });
    }

    const user = await User.findOne({ _id: ownerId });
    let balanceUpdate = user.balance;

    if (sum !== ourTransaction.sum || type !== ourTransaction.type) {
      balanceUpdate -=
        ourTransaction.type === "Income"
          ? ourTransaction.sum
          : -ourTransaction.sum;

      balanceUpdate += type === "Income" ? sum : -sum;

      await updateUser(ownerId, { balance: balanceUpdate });
    }

    ourTransaction.type = type;
    ourTransaction.category = category;
    ourTransaction.sum = sum;
    ourTransaction.comment = comment;
    ourTransaction.date = date;

    await ourTransaction.save();

    return res.status(200).json({
      statusCode: 200,
      description: "Transaction updated successfully",
      data: ourTransaction,
    });
  } catch (error) {
    return res.status(400).json({ description: error.message });
  }
};
