import transaction from "../models/transaction.js";
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
