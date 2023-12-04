import User from "#models/user.js";
import transaction from "../models/transaction.js";
export const updateUser = (id, fields) => {
  return User.findByIdAndUpdate({ _id: id }, { $set: fields });
};

export const findTransactions = (ownerId, month, year) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, month] },
            { $eq: [{ $year: "$date" }, year] },
          ],
        },
      },
    },
    { $sort: { date: -1 } },
  ]);
};
export const getIncome = (ownerId, month, year) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        type: "Income",
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, month] },
            { $eq: [{ $year: "$date" }, year] },
          ],
        },
      },
    },
    { $sort: { date: -1 } },
  ]);
};
export const getExpense = (ownerId, month, year) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        type: "Expense",
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, month] },
            { $eq: [{ $year: "$date" }, year] },
          ],
        },
      },
    },
    { $sort: { date: -1 } },
  ]);
};
