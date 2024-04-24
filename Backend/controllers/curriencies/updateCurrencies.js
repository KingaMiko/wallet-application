import axios from "axios";

import Currency from "#models/currency.js";

/**
 * POST /api/currencies
 * @tags Currencies
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 400 - Error
 */

export const updateCurrencies = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      "http://api.nbp.pl/api/exchangerates/tables/C/"
    );

    await Currency.deleteMany();

    const actual = data[0].rates;
    const result = await Currency.insertMany(actual);

    console.log("Currencies updated.");

    res.status(200).json({
      statusCode: 200,
      description: "Update Curriencies",
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
