/**
 * GET /api/users/current
 *
 * @security BearerAuth
 */

export const getUser = (req, res, next) => {
  // zbieram id urzytkownika przez auth midleware
  // const ourUser = user.find({id})
  // if(ourUser){
  //   res.json({
  //     statusCode: 200,
  //     data: ourUser,
  //   });
  // } else {console.error("No User Found")}

  res.json({
    statusCode: 200,
    description: "Get User",
  });
};
