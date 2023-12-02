import transaction from "../../models/transaction.js";
export const getStatistics = async (req, res, next) => {
  const { month, year } = req.body;
  const transactions = await transaction.aggregate([
    {
      $match: {
        owner: "grzesiek",
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
  console.log(transactions.map((el) => el));
  res.json({
    statusCode: 200,
    description: "Get Statistics",
  });
};
