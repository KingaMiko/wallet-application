/**
 * POST /api/transactions
 *
 * @security BearerAuth
 */

export const addTransaction = (req, res, next) => {
  res.json({
    statusCode: 200,
    description: "Add Transaction",
  });
};
