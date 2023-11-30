import transaction from "../../models/transaction.js";
export const addTransaction = async (req, res, next) => {
  const { type, category, sum, comment, date } = req.body;

  try {
    const newTrasaction = new transaction({
      type,
      category,
      sum,
      comment,
      date,
    });
    const result = await transaction.create(newTrasaction);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
