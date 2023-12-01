import transaction from "../../models/transaction.js";

export const getTransactions = async (req, res, next) => {
  const result = await transaction.aggregate([
    {
      $match: {
        owner: "grzesiek",
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, 4] },
            { $eq: [{ $year: "$date" }, 2023] },
          ],
        },
      },
    },
  ]);

  res.json({
    statusCode: 200,
    data: result,
  });
};
