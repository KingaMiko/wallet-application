/**
 * GET /api/categories/:id
 *
 * @security BearerAuth
 */

export const getCategory = (req, res, next) => {
  res.json({
    statusCode: 200,
    description: "Get Category",
  });
};
