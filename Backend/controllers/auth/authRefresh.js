import JWT from "jsonwebtoken";

import { createTokens } from "#plugins/authPlugin.js";
import User from "#models/user.js";

/**
 * POST /api/auth/refresh
 *
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 404 - Not Found
 * @return {ResponseSchema} 400 - Error
 */

export const authRefresh = async (req, res, next) => {
  try {
    const refreshToken = req.body.refreshToken;
    const refSecret = process.env.REFRESH_SECRET_KEY;

    const decodedRefreshToken = JWT.verify(refreshToken, refSecret);
    const user = await User.findOne({ _id: decodedRefreshToken.id });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        description: "Current user not found",
      });
    }

    const { id, name } = user;
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      await createTokens({ id, name });

    user.token = newAccessToken;
    user.refreshToken = newRefreshToken;
    await user.save();

    return res.status(200).json({
      statusCode: 200,
      description: "User successfully refreshed",
      token: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
};
