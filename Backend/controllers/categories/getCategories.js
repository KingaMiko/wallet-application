import category from "#models/category.js";

/**
 * GET /api/auth/categories
 *
 * @security BearerAuth
 * @return {ResponseWithDataSchema<Category[]>} 200 - Success, returns user's categories
 * @return {ResponseSchema} 400 - Error: Bad Request
 */
export const getAllUserCategories = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await category.find({ owner: userId });
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
