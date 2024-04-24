import patterns from "#utils/regexPatterns.json" assert { type: "json" };

/**
 * GET /api/patterns
 * @tags Pattern
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error
 */

let cachedPatterns = null;

export const getPatterns = (req, res, next) => {
  try {
    if (!cachedPatterns) {
      cachedPatterns = patterns;
    }
    return res.status(200).json({
      statusCode: 200,
      description: "Reg Exp patterns successfully fetched.",
      data: {
        patterns: cachedPatterns,
      },
    });
  } catch (error) {
    next(error);
  }
};
