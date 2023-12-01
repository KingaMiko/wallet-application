import JWT from "jsonwebtoken";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { config } from "dotenv";

import User from "#models/user.js";

export const authPlugin = () => {
  config();

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
};

export const auth = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (error) {
      return response.status(401).json({
        code: 401,
        message: error.message,
      });
    }

    if (!user) {
      return response.status(401).json({
        statusCode: 401,
        description: "Not authorized",
      });
    }

    request.user = user;
    next();
  })(request, response, next);
};
