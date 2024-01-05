import mongoose from "mongoose";

import { findTransactions } from "#helpers/transactionHelper.js";
/**
 * GET /api/transactions
 *
 * @security BearerAuth
 * @param {number} year.query - Year to filter transactions
 * @param {number} month.query - Month to filter transactions
 * @param {number} limit.query - Limit of transactions to retrieve
 * @return {ResponseWithDataSchema} 200 - succes
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getTransactions = async (req, res, next) => {
  const { year, month, limit } = req.query;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);

  try {
    const gottenYear = year || new Date().getFullYear();
    const gottenMonth = month || null;
    const gottenLimit = limit ? parseInt(limit, 10) : null;

    const result = await findTransactions(
      ownerId,
      gottenYear,
      gottenMonth,
      gottenLimit
    );

    return res.status(200).json({
      statusCode: 200,
      description: "Users Transactions",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
