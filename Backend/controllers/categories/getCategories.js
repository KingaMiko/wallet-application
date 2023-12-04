import category from "#models/category.js";

/**
 * @typedef {object} Category
 * @property {string} name.required - Name of the category
 * @property {string} description - Description of the category
 * @property {string} thumbUrl - Thumbnail URL of the category
 */

/**
 * GET /api/categories
 * Gets all categories.
 *
 * @security BearerAuth
 * @return {ResponseWithDataSchema<Category[]>} 200 - Success, returns all categories
 * @return {ResponseSchema} 400 - Error: Bad Request
 */
export const getAllCategories = async (req, res) => {
  try {
    const result = await category.find({});
    return res.status(200).json({
      statusCode: 200,
      description: "All categories",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
