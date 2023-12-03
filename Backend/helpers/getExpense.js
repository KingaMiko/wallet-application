import transaction from "#models/transaction.js";
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
