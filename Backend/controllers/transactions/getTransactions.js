export const getTransactions = (req, res, next) => {
  res.json({
    statusCode: 200,
    description: "Get Transactions",
  });
};