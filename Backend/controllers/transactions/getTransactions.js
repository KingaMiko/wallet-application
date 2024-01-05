import mongoose from "mongoose";

import { findTransactions } from "#helpers/transactionHelper.js";
/**
 * GET /api/transactions
 *
 * @security BearerAuth
 * @param {number} year.query - Year to filter transactions
 * @param {number} month.query - Month to filter transactions
 * @param {number} limit.query.optional - Limit of transactions to retrieve per page (default: 10)
 * @param {number} page.query.optional - Page number of transactions data (default: 1)
 * @return {ResponseWithDataSchema} 200 - Success response with transactions data and pagination info
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const getTransactions = async (req, res, next) => {
  const { year, month, limit, page } = req.query;
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);

  try {
    const gottenYear = year || new Date().getFullYear();
    const gottenMonth = month || null;
    const gottenLimit = limit ? parseInt(limit, 10) : 10;
    const gottenPage = page ? parseInt(page, 10) : 1;

    const skip = (gottenPage - 1) * gottenLimit;

    const result = await findTransactions(
      ownerId,
      gottenYear,
      gottenMonth,
      gottenLimit,
      skip
    );

    const totalCount = await Transaction.countDocuments({ owner: ownerId });

    return res.status(200).json({
      statusCode: 200,
      description: "Users Transactions",
      data: result,
      page: gottenPage,
      limit: gottenLimit,
      totalPages: Math.ceil(totalCount / gottenLimit),
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
