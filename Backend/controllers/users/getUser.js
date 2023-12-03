import User from "#models/user.js";

/**
 * GET /api/users/current
 *
 * @security BearerAuth
 */

export const getUser = async (req, res, next) => {
  const id = req.user.id;
  try {
    const ourUser = await User.find({ _id: id });

    if (!ourUser.length) {
      return res.json({
        statusCode: 404,
        message: "User not Found",
      });
    }
    res.json({
      statusCode: 200,
      data: ourUser,
    });
  } catch (error) {
    return res.json({ statusCode: 400, message: error.message });
  }
};
