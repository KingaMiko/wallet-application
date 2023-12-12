import Transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";
/**
 * @typedef {object} Transaction
 * @property {string} type - type of transaction
 * @property {string} category - ObjectId of the transaction category from MongoDB
 * @property {number} sum - sum of transaction
 * @property {string} comment - comment of transaction
 * @property {date} date - date of transaction
 */

/**
 * POST /api/transactions
 *
 * @security BearerAuth
 * @param {Transaction} request.body.required
 * @return {ResponseWithDataSchema} 201 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const addTransaction = async (req, res, next) => {
  const { type, category, sum, comment, date } = req.body;
  const ownerId = req.user.id;

  try {
    const newTrasaction = new Transaction({
      type,
      category,
      sum,
      comment,
      date,
      owner: ownerId,
    });
    const user = await User.findOne({ _id: ownerId });

    if (type === "Expense") {
      await updateUser(user.id, {
        balance: user.balance - sum,
      });
    } else if (type === "Income") {
      await updateUser(user.id, {
        balance: user.balance + sum,
      });
    }

    const result = await Transaction.create(newTrasaction);
    return res.status(201).json({
      statusCode: 201,
      description: "Transaction added",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
