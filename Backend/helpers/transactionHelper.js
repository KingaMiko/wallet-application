import User from "#models/user.js";
import transaction from "#models/transaction.js";
export const updateUser = (id, fields) => {
  return User.findByIdAndUpdate({ _id: id }, { $set: fields });
};

export const updateTransactionById = (id, fields) => {
  return transaction.findByIdAndUpdate(
    { _id: id },
    { $set: fields },
    { new: true }
  );
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
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "categoryData",
      },
    },
    {
      $unwind: {
        path: "$categoryData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        type: 1,
        category: "$categoryData.name",
        sum: 1,
        comment: 1,
        date: 1,
        owner: 1,
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
