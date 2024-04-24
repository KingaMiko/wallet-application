import User from "#models/user.js";

/**
 * GET /api/users/current
 * @tags User
 * @security BearerAuth
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 404 - User Not Found
 * @return {ResponseSchema} 400 - Error
 */

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).lean();

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        description: "Current user not found",
      });
    }

    const { name, email, _id, balance, categories } = user;

    return res.status(200).json({
      statusCode: 200,
      description: "Current user successfuly fetched.",
      data: {
        email,
        name,
        id: _id,
        balance,
        categories,
      },
    });
  } catch (error) {
    next(error);
  }
};
