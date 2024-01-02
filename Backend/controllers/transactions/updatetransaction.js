import Transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";

/**
 * @typedef {object} TransactionUpdate
 * @property {string} type.required - Type of transaction (Income/Expense)
 * @property {string} category - ObjectId of the transaction category from MongoDB
 * @property {number} sum - Sum of transaction
 * @property {string} comment - Comment of transaction
 * @property {date} date.required - Date of transaction
 */

/**
 * PATCH /api/transactions/{id}
 *
 * @security BearerAuth
 * @param {string} id.path.required - ID of the transaction to update
 * @param {TransactionUpdate} request.body.required - Data to update the transaction
 * @return {ResponseWithDataSchema} 200 - Success
 * @return {ResponseSchema} 403 - Forbidden (No authorization or not owner of the transaction)
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const updateTransaction = async (req, res) => {
  const ownerId = req.user.id;
  const { id } = req.params;
  const { type, category, sum, comment, date } = req.body;

  try {
    const ourTransaction = await Transaction.findOne({
      _id: id,
      owner: ownerId,
    });

    if (!ourTransaction) {
      return res
        .status(403)
        .json({ description: "You don't have permission to do this" });
    }

    const user = await User.findOne({ _id: ownerId });
    let balanceUpdate = user.balance;

    if (sum !== ourTransaction.sum || type !== ourTransaction.type) {
      balanceUpdate -=
        ourTransaction.type === "Income"
          ? ourTransaction.sum
          : -ourTransaction.sum;

      balanceUpdate += type === "Income" ? sum : -sum;

      await updateUser(ownerId, { balance: balanceUpdate });
    }

    ourTransaction.type = type;
    ourTransaction.category = category;
    ourTransaction.sum = sum;
    ourTransaction.comment = comment;
    ourTransaction.date = date;

    await ourTransaction.save();

    return res.status(200).json({
      statusCode: 200,
      description: "Transaction updated successfully",
      data: ourTransaction,
    });
  } catch (error) {
    return res.status(400).json({ description: error.message });
  }
};
