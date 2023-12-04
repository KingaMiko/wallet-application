import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";

import User from "#models/user.js";

/**
 * GET /api/users/current
 *
 * @security BearerAuth
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 404 - User Not Found
 * @return {ResponseSchema} 400 - Error
 */

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        description: "Current user not found.",
      });
    }

    const { id, name, email, refreshToken } = user;

    configDotenv();
    const decodedRefreshToken = JWT.verify(
      refreshToken,
      process.env.REFRESH_SECRET_KEY
    );

    const newAccessToken = JWT.sign({ id, name }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });

    return res.status(200).json({
      statusCode: 200,
      description: "Current user successfuly refreshed.",
      token: newAccessToken,
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};
