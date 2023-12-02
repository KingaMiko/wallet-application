/**
 * GET /api/users/current
 *
 * @security BearerAuth
 */

export const getUser = (req, res, next) => {
  res.json({
    statusCode: 200,
    description: "Get User",
  });
};
