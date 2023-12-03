

import transaction from "#models/transaction.js";
/**
 * POST /api/transactions
 *
 * @security BearerAuth
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
