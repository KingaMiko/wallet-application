import Category from "#models/category.js";

/**
 * GET /api/categories
 * @tags Categories
 * @security BearerAuth
 * @return {ResponseWithDataSchema} 200 - Success, returns user's categories
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getAllUserCategories = async (req, res) => {
  const categories = req.user.categories;

  try {
    const result = await Category.find({ _id: categories });

    return res.status(200).json({
      statusCode: 200,
      description: "User's categories",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
