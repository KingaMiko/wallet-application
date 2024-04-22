import Category from "#models/category.js";
import User from "#models/user.js";
import Filter from "bad-words";
const filter = new Filter();

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
export const createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (name.length > 20) {
      return res.status(400).json({ description: "Name is too long" });
    }

    if (filter.isProfane(name)) {
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
