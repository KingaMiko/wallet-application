import * as patterns from "#utils/patterns.js";

/**
 * GET /api/patterns
 *
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error
 */

export const getPatterns = async (req, res, next) => {
  try {
    return res.status(200).json({
      statusCode: 200,
      description: "Reg Exp patterns successfuly fetched.",
      data: {
        patterns,
      },
    });
  } catch (error) {
    next(error);
  }
};
