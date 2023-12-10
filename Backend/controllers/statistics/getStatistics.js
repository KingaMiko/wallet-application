import mongoose from "mongoose";
import { findTransactions } from "#helpers/transactionHelper.js";
import category from "#models/category.js";
import { getExpense } from "#helpers/transactionHelper.js";
import { getIncome } from "#helpers/transactionHelper.js";
import User from "#models/user.js";
import transaction from "#models/transaction.js";
import { calculateStats } from "#helpers/transactionHelper.js";
import { eachMonthTransactions } from "#helpers/transactionHelper.js";

/**
 * A date
 * @typedef {object} Date
 * @property {integer} month.required - The title
 * @property {integer} year.required - The year - double
 */
/**
 

/**
 * GET /api/statistics
 *
 * @security BearerAuth
 * @param {Date} req.body.required
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getStatistics = async (req, res, next) => {
  const { month, year, type } = req.body;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);
  try {
    const expenseTransactions = await getExpense(ownerId, month, year);
    const incomeTransactions = await getIncome(ownerId, month, year);
    const owner = await User.findById(ownerId);
    const ourTransactions = await findTransactions(ownerId, year);
    const categories = await category.find({ _id: { $in: owner.categories } });

    const expenseStats = calculateStats(
      categories,
      expenseTransactions,
      "expense"
    );

    const incomeStats = calculateStats(
      categories,
      incomeTransactions,
      "income"
    );
    const expanses = (await getExpense(ownerId, month, year)).reduce(
      (previouseValue, element) => {
        return (previouseValue += element.sum);
      },
      0
    );
    const income = (await getIncome(ownerId, month, year)).reduce(
      (previouseValue, element) => {
        return (previouseValue += element.sum);
      },
      0
    );

    const eachMonthStats = await eachMonthTransactions(ourTransactions);

    return res.status(200).json({
      statusCode: 200,
      description: "Users statistics",
      data: {
        expenseStats,
        incomeStats,
        expanses,
        income,
        eachMonthStats,
      },
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
