import Joi from "joi";

import patterns from "#utils/regexPatterns.json" assert { type: "json" };

/**
 * @typedef {object} RegisterUserSchema
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} name
 */

export const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(patterns.passwordPattern.pattern))
    .min(6)
    .required(),
  name: Joi.string().pattern(new RegExp(patterns.namePattern.pattern)).min(3),
});
