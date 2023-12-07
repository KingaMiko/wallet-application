import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";

import {
  createTokens,
  sendRefreshToken,
  cleanNotValidSessions,
} from "#plugins/authPlugin.js";
import User from "#models/user.js";
import Session from "#models/session.js";

/**
 * POST /api/auth/refresh
 *
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 404 - Not Found
 * @return {ResponseSchema} 400 - Error
 */

export const authRefresh = async (req, res, next) => {
  if (req.cookies?.jwt) {
    try {
      configDotenv();

      const refSecret = process.env.REFRESH_SECRET_KEY;
      const refreshToken = req.cookies.jwt;

      const stealedSession = await Session.findOne({ refreshToken }).lean();

      if (stealedSession) {
        return res.status(400).json({
          statusCode: 400,
          description: "Attemption of use refresh token from stealed session!",
        });
      }

      const decodedRefreshToken = JWT.verify(refreshToken, refSecret);
      const user = await User.findOne({ _id: decodedRefreshToken.id });

      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          description: "Current user not found",
        });
      }

      const { id, name, email } = user;
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        await createTokens({ id, name });

      user.token = newAccessToken;
      user.refreshToken = newRefreshToken;
      await user.save();

      await cleanNotValidSessions();

      sendRefreshToken(res, newRefreshToken);
      const blacklistedSession = await new Session({ refreshToken });
      blacklistedSession.issuedAt = decodedRefreshToken.iat;
      blacklistedSession.expireAt = decodedRefreshToken.exp;
      blacklistedSession.save();

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

  return res.status(400).json({
    statusCode: 400,
    description: "No cookie",
  });
};
