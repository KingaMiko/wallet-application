import Category from "#models/category.js";
import User from "#models/user.js";
import Filter from "bad-words";

/**
 * @typedef {object} CategoryCreate
 * @property {string} name.required - Name of the category
 * @property {string} type.required - Type of the category. Should be one of the following: "income" or "expense".
 */

/**
 * POST /api/categories
 *
 * @security BearerAuth
 * @param {CategoryCreate} request.body.required - Category data
 * @return {ResponseWithDataSchema<CategoryCreate>} 201 - Success, category created
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

export const createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (name.length > 20) {
      return res.status(400).json({ description: "Name is too long" });
    }

    if (customFilter.isProfane(name) || profanityRegex.test(name)) {
      return res
        .status(400)
        .json({ description: "Name contains prohibited words" });
    }

    const userId = req.user.id;
    const newCategory = new Category({ name, type });
    const savedCategory = await newCategory.save();

    const user = await User.findById(userId);
    user.categories.push(savedCategory._id);
    await user.save();

    res.status(201).json({ data: savedCategory });
  } catch (error) {
    res.status(400).json({ description: error.message });
  }
};
