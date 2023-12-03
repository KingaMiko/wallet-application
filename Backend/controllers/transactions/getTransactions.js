import mongoose from "mongoose";
import transaction from "../../models/transaction.js";
import { findTransactions } from "../../helpers/findTransactions.js";
export const getTransactions = async (req, res, next) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const ObjectId = mongoose.Types.ObjectId;
  const ownerId = new ObjectId(req.user.id);
  try {
    const result = await findTransactions(ownerId, currentMonth, currentYear);

    res.json({
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
