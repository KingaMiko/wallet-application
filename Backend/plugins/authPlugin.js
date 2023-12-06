import JWT from "jsonwebtoken";
import passport from "passport";
import cookieparser from "cookie-parser";
import { ExtractJwt, Strategy } from "passport-jwt";
import { config } from "dotenv";

import User from "#models/user.js";

config();

export const authPlugin = (app) => {
  const options = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  passport.use(
    new Strategy(options, async (token, onVerified) => {
      try {
        const user = await User.findById(token.id);

        if (!user) {
          throw new Error("User not found");
        }

        const userToken = JWT.verify(user.token, process.env.SECRET_KEY);

        if (userToken.iat !== token.iat) {
          throw new Error("Not valid token");
        }

        return onVerified(null, user);
      } catch (error) {
        onVerified(error);
      }
    })
  );
  app.use(cookieparser());
};

export const createTokens = async (
  data,
  accessTokenExpIn = "10m",
  refreshTokenExpIn = "1d"
) => {
  const secret = process.env.SECRET_KEY;
  const refSecret = process.env.REFRESH_SECRET_KEY;

  const accessToken = await JWT.sign(data, secret, {
    expiresIn: accessTokenExpIn,
  });
  const refreshToken = await JWT.sign(data, refSecret, {
    expiresIn: refreshTokenExpIn,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const sendRefreshToken = (res, refreshToken, numOfDays = 1) => {
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: numOfDays * 24 * 60 * 60 * 1000,
  });
};

export const auth = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error) {
      return response.status(401).json({
        statusCode: 401,
        description: error.message,
      });
    }

    if (info && info.message === "jwt expired") {
      return response.status(401).json({
        statusCode: 401,
        description: "Access expired",
      });
    }

    if (!user) {
      return response.status(401).json({
        statusCode: 401,
        description: "Access unauthorized",
      });
    }

    request.user = user;
    next();
  })(request, response, next);
};
