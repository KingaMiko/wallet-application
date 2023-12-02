import Joi from "joi";

import { passwordPattern } from "#utils/regexPatterns.js";

/**
 * @typedef {object} LoginUserSchema
 * @property {string} email.required
 * @property {string} password.required
 */

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordPattern).min(6).required(),
});
