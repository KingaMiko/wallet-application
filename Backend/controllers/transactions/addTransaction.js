import transaction from "../../models/transaction.js";
export const addTransaction = async (req, res, next) => {
  const { type, category, sum, comment, date } = req.body;
  const ourDate = new Date(date);
  console.log(ourDate.getDate());

  try {
    const newTrasaction = new transaction({
      type,
      category,
      sum,
      comment,
      date,
      owner,
    });
    const result = await transaction.create(newTrasaction);
    res.json({
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
