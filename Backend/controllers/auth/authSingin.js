import { loginUserSchema } from "#schemas/loginUser.schema.js";
import { createTokens } from "#plugins/authPlugin.js";
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

    const { id, name } = user;
    const { accessToken, refreshToken } = await createTokens({ id, name });

    user.token = accessToken;
    user.refreshToken = refreshToken;
    await user.save();

    return res.status(200).json({
      statusCode: 200,
      description: "User successfully logged in",
      token: accessToken,
      refreshToken,
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};
