import transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";
import { updateTransactionById } from "#helpers/transactionHelper.js";
import mongoose from "mongoose";

/**
 * @typedef {object} Id
 * @property {string} id.required - type of transaction
 */
/**
 * @typedef {object} Transaction
 * @property {string} type.required - type of transaction
 * @property {string} category - category of transaction
 * @property {number} sum - sum of transaction
 * @property {string} comment - comment of transaction
 * @property {date} date.required - date of transaction
 */

/**
 * PATCH /api/transactions
 *
 * @security BearerAuth
 * @param {Id} request.params.required
 * @param {Transaction} request.body.required
 * @return {ResponseWithDataSchema} 201 - Success
 * @return {ResponseSchema} 403 - No authorization
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const updateTransaction = async (req, res) => {
  const ownerId = req.user.id;
  const { id } = req.params;
  const { type, category, sum, comment, date } = req.body;
  const ourUser = await User.findOne({ _id: ownerId });
  try {
    const ourTransaction = await transaction.findOne({ _id: id });
    if (ownerId === ourTransaction.owner.toString()) {
      const newTransaction = new transaction({
        _id: id,
        type,
        category,
        sum,
        comment,
        date,
      });

      if (sum !== ourTransaction.sum || type !== ourTransaction.type) {
        if (ourTransaction.type === "Income" && type === "Income") {
          const usersBalance = await updateUser(ourUser.id, {
            balance: ourUser.balance - ourTransaction.sum + sum,
          });
        } else if (ourTransaction.type === "Income" && type === "Expense") {
          const usersBalance = await updateUser(ourUser.id, {
            balance: ourUser.balance - ourTransaction.sum - sum,
          });
        } else if (ourTransaction.type === "Expense" && type === "Expense") {
          const usersBalance = await updateUser(ourUser.id, {
            balance: ourUser.balance + ourTransaction.sum - sum,
          });
        } else if (ourTransaction.type === "Expense" && type === "Income") {
          const usersBalance = await updateUser(ourUser.id, {
            balance: ourUser.balance + ourTransaction.sum + sum,
          });
        }
      }

      const result = await updateTransactionById(id, newTransaction);
      return res.status(201).json({
        statusCode: 201,
        description: "Transaction updated",
        data: result,
      });
    }
    return res
      .status(403)
      .json({ description: "You dont have permision to do that" });
  } catch (error) {
    return res.status(400).json({ description: error.message });
  }
};
