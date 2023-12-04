import JWT from "jsonwebtoken";
import { configDotenv } from "dotenv";

import { loginUserSchema } from "#schemas/loginUser.schema.js";
import User from "#models/user.js";

/**
 * POST /api/auth/signin
 *
 * @param {LoginUserSchema} request.body.required
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 401 - Not Authorized
 * @return {ResponseSchema} 400 - Error
 */

export const authSignin = async (req, res, next) => {
  try {
    await loginUserSchema.validateAsync(req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.validPassword(password)) || !user.verified) {
      return res.status(401).json({
        statusCode: 401,
        description: "Email and/or password is wrong or user not verified",
      });
    }

    configDotenv();
    const secret = process.env.SECRET_KEY;
    const refSecret = process.env.REFRESH_SECRET_KEY;

    const { id, name } = user;
    const token = await JWT.sign({ id, name }, secret, {
      expiresIn: "10m",
    });
    const refToken = await JWT.sign({ id, name }, refSecret, {
      expiresIn: "1d",
    });

    user.token = token;
    user.refreshToken = refToken;
    await user.save();

    res.cookie("jwt", refToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      statusCode: 200,
      description: "User successfuly logged in",
      token: token,
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};
