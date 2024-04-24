import Transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";
import Filter from "bad-words";

/**
 * @typedef {object} Transaction
 * @property {string} type - type of transaction
 * @property {string} category - ObjectId of the transaction category from MongoDB
 * @property {number} sum - sum of transaction
 * @property {string} comment - comment of transaction
 * @property {date} date - date of transaction
 */

/**
 * POST /api/transactions
 *
 * @security BearerAuth
 * @param {Transaction} request.body.required
 * @return {ResponseWithDataSchema} 201 - Success
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

export const addTransaction = async (req, res, next) => {
  const { type, category, sum, comment, date } = req.body;
  const ownerId = req.user.id;

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

  try {
    const newTransaction = new Transaction({
      type,
      category,
      sum,
      comment,
      date,
      owner: ownerId,
    });

    const user = await User.findOne({ _id: ownerId });

    if (type === "Expense") {
      await updateUser(user.id, {
        balance: user.balance - sum,
      });
    } else if (type === "Income") {
      await updateUser(user.id, {
        balance: user.balance + sum,
      });
    }

    const result = await Transaction.create(newTransaction);
    return res.status(201).json({
      statusCode: 201,
      description: "Transaction added",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
