import Currency from "#models/currency.js";

/**
 * GET /api/currencies
 * @tags Currencies
 * @security BearerAuth
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error
 */

export const getCurrencies = async (req, res, next) => {
  try {
    const currencies = await Currency.find();

    res.status(200).json({
      statusCode: 200,
      description: "Currencies fetched successfuly",
      data: { currencies },
    });
  } catch (error) {
    next(error);
  }
};
