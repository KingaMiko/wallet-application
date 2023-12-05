import User from "#models/user.js";

/**
 * GET /api/auth/logout
 *
 * @security BearerAuth
 * @return 204 - Ok
 * @return {ResponseSchema} 400 - Error
 */

export const authLogout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      token: null,
      refreshToken: null,
    });

    req.user = null;
    res.cookie("jwt", null);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
