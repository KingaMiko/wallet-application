import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";

import User from "#models/user.js";

/**
 * POST /api/auth/refresh
 *
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 404 - Not Found
 * @return {ResponseSchema} 400 - Error
 */

export const authRefresh = async (req, res, next) => {
  if (req.cookies?.jwt) {
    const refreshToken = req.cookies.jwt;

    try {
      configDotenv();
      const secret = process.env.SECRET_KEY;
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

      const newAccessToken = JWT.sign({ id, name }, secret, {
        expiresIn: "10m",
      });
      const newRefreshToken = await JWT.sign({ id, name }, refSecret, {
        expiresIn: "1d",
      });

      user.token = newAccessToken;
      user.refreshToken = newRefreshToken;
      await user.save();

      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        statusCode: 200,
        description: "User successfuly refreshed",
        token: newAccessToken,
        data: {
          email,
          name,
        },
      });
    } catch (error) {
      next(error);
    }
  }
};
