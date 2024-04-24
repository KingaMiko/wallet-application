import { loginUserSchema } from "#schemas/loginUser.schema.js";
import { createTokens, sendRefreshToken } from "#plugins/authPlugin.js";
import User from "#models/user.js";

/**
 * POST /api/auth/signin
 * @tags Auth
 * @param {LoginUserSchema} request.body.required
 * @return {ResponseWithTokenSchema} 200 - Success
 * @return {ResponseSchema} 401 - Not Authorized
 * @return {ResponseSchema} 400 - Error
 * @description To test the documentation, you can use the following test credentials:<br>
 *              <strong>Email:</strong> kinga.mikola@gmail.com<br>
 *              <strong>Password:</strong> TestTest1+<br>
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

    sendRefreshToken(res, refreshToken);

    return res.status(200).json({
      statusCode: 200,
      description: "User successfuly logged in",
      token: accessToken,
      data: {
        email,
        name,
      },
    });
  } catch (error) {
    next(error);
  }
};
