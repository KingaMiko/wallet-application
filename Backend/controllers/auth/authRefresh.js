import JWT from "jsonwebtoken";
import User from "#models/user.js";
import Session from "#models/session.js";
import {
  createTokens,
  sendRefreshToken,
  cleanNotValidSessions,
} from "#plugins/authPlugin.js";

export const authRefresh = async (req, res, next) => {
  if (!req.cookies?.jwt) {
    return res.status(400).json({
      statusCode: 400,
      description: "No refresh token cookie found",
    });
  }

  const refreshToken = req.cookies.jwt;
  try {
    const decodedRefreshToken = JWT.verify(
      refreshToken,
      process.env.REFRESH_SECRET_KEY
    );

    const existingSession = await Session.findOne({ refreshToken }).lean();
    if (existingSession) {
      await Session.findByIdAndDelete(existingSession._id);
    }

    const user = await User.findOne({ _id: decodedRefreshToken.id });

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({
        statusCode: 401,
        description: "Unauthorized - Invalid refresh token",
      });
    }

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      await createTokens({ id: user.id, name: user.name });

    user.token = newAccessToken;
    user.refreshToken = newRefreshToken;
    await user.save();

    await cleanNotValidSessions();

    sendRefreshToken(res, newRefreshToken);

    const newSession = new Session({ refreshToken: newRefreshToken });
    newSession.issuedAt = Date.now();
    newSession.expireAt = decodedRefreshToken.exp;
    await newSession.save();

    return res.status(200).json({
      statusCode: 200,
      description: "User successfully refreshed",
      token: newAccessToken,
    });
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      description: "Invalid or expired refresh token",
    });
  }
};
