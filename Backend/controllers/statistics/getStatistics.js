import mongoose from "mongoose";
import { findTransactions } from "#helpers/transactionHelper.js";
import category from "#models/category.js";
import User from "#models/user.js";
import { calculateStats } from "#helpers/transactionHelper.js";
import { eachMonthTransactions } from "#helpers/transactionHelper.js";
import { getTransactionByType } from "#helpers/transactionHelper.js";
/**
 * A date
 * @typedef {object} Date
 * @property {integer} year.required
 * @property {string} type
 * @property {integer} month
 */

/**
 * GET /api/statistics
 *
 * @security BearerAuth
 * @param {Date} request.query.required
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getStatistics = async (req, res, next) => {
  const { year, type, month } = req.query;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);
  try {
    const expenseOrIncome = await getTransactionByType(
      ownerId,
      type,
      year,
      month
    );
    const owner = await User.findById(ownerId);
    const ourTransactions = await findTransactions(ownerId, year);
    const categories = await category.find({ _id: { $in: owner.categories } });
    console.log(ourTransactions);
    const expenseStats = calculateStats(categories, expenseOrIncome, type);

    const expanses = (
      await getTransactionByType(ownerId, "Expense", year, month)
    ).reduce((previouseValue, element) => {
      return (previouseValue += element.sum);
    }, 0);
    const income = (
      await getTransactionByType(ownerId, "Income", year, month)
    ).reduce((previouseValue, element) => {
      return (previouseValue += element.sum);
    }, 0);

    const eachMonthStats = eachMonthTransactions(ourTransactions);

    return res.status(200).json({
      statusCode: 200,
      description: "Users statistics",
      data: {
        expenseStats,
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
