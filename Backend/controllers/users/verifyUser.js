import User from "#models/user.js";

/**
 * GET /api/users/verify/{verificationToken}
 * 
 * @param {string} verificationToken.path - Verification token
 * @return {ResponseSchema} 200 - Success
 * @return {ResponseSchema} 404 - Error: User not found
 */

export const verifyUser = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        description: "User not found",
      });
    }

    user.verificationToken = " ";
    user.verified = true;
    await user.save();

    return res.status(200).json({
      statusCode: 200,
      description: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
};
