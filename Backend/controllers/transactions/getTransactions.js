import mongoose from "mongoose";

import { findTransactions } from "#helpers/transactionHelper.js";
/**
 * GET /api/transactions
 *
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
  const { year, month, limit = 10, page = 1 } = req.query;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);

  try {
    const gottenYear = year || new Date().getFullYear();
    const gottenMonth = month || null;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const result = await findTransactions(
      ownerId,
      gottenYear,
      gottenMonth,
      parseInt(limit, 10),
      skip
    );

    const totalCount = await Transaction.countDocuments({ owner: ownerId });
    const totalPages = Math.ceil(totalCount / limit);

    return res.status(200).json({
      statusCode: 200,
      description: "Users Transactions",
      data: result,
      pagination: {
        total: totalCount,
        page: parseInt(page, 10),
        totalPages: totalPages,
        limit: parseInt(limit, 10),
      },
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
