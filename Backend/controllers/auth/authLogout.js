import User from "#models/user.js";

/**
 * GET /api/logout
 *
 * @security BearerAuth
 * @return 204 - Ok
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const authLogout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null });

    req.user = null;
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }

  return res.status(204).end();
};
