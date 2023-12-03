import category from "#models/category.js";
/**
 * GET /api/categories/{verificationToken}
 *
 * @security BearerAuth
 * @param {string} verificationToken.path - Verification token
 * @return {ResponseSchema} 200 - Success
 * @return {ResponseSchema} 404 - Error: User not found
 */
export const getCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id) {
      const result = await category.find({ _id: id });
      return res.json({ statusCode: 200, data: result });
    }
    const result = await category.find({});
    const usersId = req.user.id;

    res.json({
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
