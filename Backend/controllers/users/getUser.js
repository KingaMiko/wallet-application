import User from "#models/user.js";

/**
 * GET /api/users/current
 *
 * @security BearerAuth
 */

export const getUser = async (req, res, next) => {
  const id = req.user.id;
  try {
    const ourUser = await User.findOne({ _id: id });

    if (!ourUser) {
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
    console.error("Error fetching user:", error);
    return res.json({ statusCode: 400, message: error.message });
  }
};
