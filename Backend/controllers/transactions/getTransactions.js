import transaction from "../../models/transaction.js";

export const getTransactions = async (req, res, next) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const result = await transaction.aggregate([
    {
      $match: {
        owner: "grzesiek",
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, currentMonth] },
            { $eq: [{ $year: "$date" }, currentYear] },
          ],
        },
      },
    },
    { $sort: { date: -1 } },
  ]);

  res.json({
    statusCode: 200,
    data: result,
  });
};
