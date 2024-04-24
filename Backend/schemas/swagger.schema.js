/**
 * @typedef {object} ResponseSchema
 * @property {string} statusCode
 * @property {string} description
 */

/**
 * @typedef {object} ResponseWithDataSchema
 * @property {string} statusCode
 * @property {string} description
 * @property {object} data
 */

/**
 * @typedef {object} ResponseWithTokenSchema
 * @property {string} statusCode
 * @property {string} description
 * @property {string} token
 * @property {object} data
 */

export const dateSchema = {
  type: "string",
  pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)\\d{2}$",
  description: "Date in DD/MM/YYYY format",
};
