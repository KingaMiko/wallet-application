import transaction from "#models/transaction.js";

/**
 * @typedef {object} ResponseWithDataSchema
 * @property {string} statusCode
 * @property {string} description
 * @property {string} token
 * @property {object} data
 */

/**
 * POST /api/transactions
 *
 * @security BearerAuth
 * @param {object} request.body.required
 * @return {ResponseWithDataSchema} 201 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const addTransaction = async (req, res, next) => {
  const { type, category, sum, comment, date } = req.body;
  const ownerId = req.user.id;
  try {
    const newTrasaction = new transaction({
      type,
      category,
      sum,
      comment,
      date,
      owner: ownerId,
    });
    const result = await transaction.create(newTrasaction);
    res.json({
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
