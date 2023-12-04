import category from "#models/category.js";

/**
 * @typedef {object} Category
 * @property {string} name.required - Name of the category
 * @property {string} description - Description of the category
 * @property {string} thumbUrl - Thumbnail URL of the category
 */

/**
 * POST /api/categories
 * @security BearerAuth
 * @param {Category} request.body.required - Category data
 * @return {ResponseWithDataSchema} 201 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */
export const createCategory = async (req, res) => {
  try {
    const { name, description, thumbUrl } = req.body;

    const newCategory = new category({ name, description, thumbUrl });
    const savedCategory = await newCategory.save();

    res.status(201).json({ data: savedCategory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
