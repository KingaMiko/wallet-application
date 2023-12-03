import mongoose from "mongoose";
import { findTransactions } from "#helpers/findTransactions.js";
import category from "#models/category.js";
import { getExpense } from "#helpers/getExpense.js";
import { getIncome } from "#helpers/getIncome.js";

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
 * @property
 * @param {Date} req.body.required
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getStatistics = async (req, res, next) => {
  const { month, year } = req.body;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);
  try {
    const transactions = await findTransactions(ownerId, month, year);
    const categories = await category.find({});
    const stats = categories.map((category) => ({
      category: category.name,
      total: transactions
        .filter((el) => el.category?.toString() === category.id)
        .reduce((previouseValue, element) => {
          return (previouseValue += element.sum);
        }, 0),
    }));
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

    return res.status(200).json({
      statusCode: 200,
      data: {
        stats,
        expanses,
        income,
      },
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
