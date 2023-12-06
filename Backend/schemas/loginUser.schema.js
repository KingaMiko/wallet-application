import Joi from "joi";

import patterns from "#utils/regexPatterns.json" assert { type: "json" };

/**
 * @typedef {object} LoginUserSchema
 * @property {string} email.required
 * @property {string} password.required
 */

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(patterns.passwordPattern.pattern))
    .min(6)
    .required(),
});
