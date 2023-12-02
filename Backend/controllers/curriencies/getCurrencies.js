export const getCurrencies = (req, res, next) => {
  res.json({
    statusCode: 200,
    description: "Get Currencies",
  });
};
