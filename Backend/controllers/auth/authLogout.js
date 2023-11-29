export const authLogout = (req, res, next) => {
  return res.json({
    statusCode: 200,
    description: "Auth Logout",
  });
};
