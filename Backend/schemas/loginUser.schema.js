import Joi from "joi";

/**
 * @typedef {object} LoginUserSchema
 * @property {string} email.required
 * @property {string} password.required
 */

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[-+*_.]+)/)
    .min(6)
    .required(),
});
