import mongoose from "mongoose";

import { findTransactions } from "#helpers/findTransactions.js";
/**
 * GET /api/transactions
 *
 * @security BearerAuth
 * @return {ResponseWithDataSchema} 200 - succes
 * @return {ResponseSchema} 400 - Error: Bad Request
 */
export const getTransactions = async (req, res, next) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);
  try {
    const result = await findTransactions(ownerId, currentMonth, currentYear);

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
