import Joi from "joi";

import { namePattern, passwordPattern } from "../utils/regexPatterns.js";

/**
 * @typedef {object} RegisterUserSchema
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} name
 */

export const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordPattern).min(6).required(),
  name: Joi.string().pattern(namePattern).min(3),
});
