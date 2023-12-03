import transaction from "../models/transaction.js";
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
