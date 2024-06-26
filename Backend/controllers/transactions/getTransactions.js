import mongoose from "mongoose";
import Transaction from "#models/transaction.js";

import { findTransactions } from "#helpers/transactionHelper.js";
/**
 * GET /api/transactions
 * @tags Transactions
 * @security BearerAuth
 * @param {number} year.query.required - Year to filter transactions
 * @param {number} month.query.required - Month to filter transactions
 * @param {number} limit.query.optional - Limit of transactions to retrieve per page (default: 10)
 * @param {number} page.query.optional - Page number of transactions data (default: 1)
 * @return {ResponseWithDataSchema} 200 - Success response with transactions data and pagination info
 * @return {ResponseSchema} 400 - Error: Bad Request
 * @return {ResponseSchema} 500 - Internal Server Error
 */

export const getTransactions = async (req, res, next) => {
  const { year, month, limit = "10", page = "1" } = req.query;
  const ownerId = new mongoose.Types.ObjectId(req.user.id);

  try {
    const gottenYear = year || new Date().getFullYear();
    const gottenMonth = month || null;
    const parsedLimit = parseInt(limit, 10);
    const parsedPage = parseInt(page, 10);

    if (!Number.isInteger(parsedLimit) || !Number.isInteger(parsedPage)) {
      return res.status(400).json({
        statusCode: 400,
        description: "Invalid limit or page number.",
      });
    }

    const skip = (parsedPage - 1) * parsedLimit;

    const result = await findTransactions(
      ownerId,
      gottenYear,
      gottenMonth,
      parsedLimit,
      skip
    );

    const totalCount = await Transaction.countDocuments({
      owner: ownerId,
      date: {
        $gte: new Date(gottenYear, gottenMonth - 1, 1),
        $lt: new Date(gottenYear, gottenMonth, 1),
      },
    });
    const totalPages = Math.ceil(totalCount / parsedLimit);

    return res.status(200).json({
      statusCode: 200,
      description: "Users Transactions",
      data: result,
      pagination: {
        total: totalCount,
        page: parsedPage,
        totalPages: totalPages,
        limit: parsedLimit,
      },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      description: error.message,
    });
  }
};
