import Joi from "joi";

/**
 * @typedef {object} RegisterUserSchema
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} name
 */

export const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{}'\"\\|,.<>\/?~])/
    )
    .min(6)
    .required(),
  name: Joi.string()
    .pattern(/^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+$/)
    .min(3),
});
