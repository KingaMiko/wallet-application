import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";

import {
  createTokens,
  sendRefreshToken,
  cleanNotValidSessions,
} from "#plugins/authPlugin.js";
import User from "#models/user.js";
import Session from "#models/session.js";

export const authRefresh = async (req, res, next) => {
  if (req.cookies?.jwt) {
    try {
      configDotenv();

      const refSecret = process.env.REFRESH_SECRET_KEY;
      const refreshToken = req.cookies.jwt;

      let decodedRefreshToken;
      try {
        decodedRefreshToken = JWT.verify(refreshToken, refSecret);
      } catch (error) {
        return res.status(401).json({
          statusCode: 401,
          description: "Invalid or expired refresh token",
        });
      }

      const stealedSession = await Session.findOne({ refreshToken }).lean();

      if (stealedSession) {
        return res.status(400).json({
          statusCode: 400,
          description: "Attempt of use refresh token from a stolen session!",
        });
      }

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

      await Session.findOneAndDelete({ refreshToken: req.cookies.jwt });

      const newSession = new Session({ refreshToken: newRefreshToken });
      newSession.issuedAt = Date.now();
      newSession.expireAt = decodedRefreshToken.exp;
      await newSession.save();

      return res.status(200).json({
        statusCode: 200,
        description: "User successfully refreshed",
        token: newAccessToken,
        data: {
          email,
          name,
        },
      });
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      statusCode: 400,
      description: "No refresh token cookie found",
    });
  }
};
