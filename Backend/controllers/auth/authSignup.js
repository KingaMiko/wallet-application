import { nanoid } from "nanoid";

import { sendVerificationMail } from "#plugins/index.js";
import { registerUserSchema } from "#schemas/registerUser.schema.js";
import User from "#models/user.js";
import Category from "#models/category.js";

/**
 * POST /api/auth/signup
 *
 * @param {RegisterUserSchema} request.body.required
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 409 - Error: Email in use
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const authSignup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    await registerUserSchema.validateAsync(req.body);

    const user = await User.findOne({ email }, { email: 1 }).lean();
    const verificationToken = nanoid();

    if (user) {
      return res.status(409).json({
        statusCode: 409,
        description: "Email in use",
      });
    }

    const newUser = await new User({ email, name, verificationToken });
    await newUser.setPassword(password);
    await newUser.setDefCategories();
    await newUser.save();
    await sendVerificationMail(email, verificationToken, name);

    return res.status(200).json({
      statusCode: 200,
      description: "User registered successfully",
      data: { email, name },
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
