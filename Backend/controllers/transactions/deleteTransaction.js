import transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "../../helpers/transactionHelper.js";

/**
 * @typedef {string} Id
 * @property {string} id.required - type of transaction
 */

/**
 * DELETE /api/transactions
 *
 * @security BearerAuth
 * @param {Id} request.body.required
 * @return {ResponseWithDataSchema} 201 - Success
 * @return {ResponseSchema} 403 - No authorization
 * @return {ResponseSchema} 400 - Error: Bad Request
 */

export const deleteTransaction = async (req, res) => {
  const { id } = req.body;
  const ownerId = req.user.id;
  const ourTransaction = await transaction.findOne({ _id: id });
  const ourUser = await User.findOne({ _id: ownerId });

  try {
    if (ownerId === ourTransaction.owner.toString()) {
      if (ourTransaction.type === "Income") {
        const userBalance = await updateUser(ourUser.id, {
          balance: ourUser.balance - ourTransaction.sum,
        });
      } else if (ourTransaction.type === "Expense") {
        const userBalance = await updateUser(ourUser.id, {
          balance: ourUser.balance + ourTransaction.sum,
        });
      }
      const result = await transaction.findByIdAndDelete(id);

      return res.status(200).json({
        statusCode: 200,
        description: "Transaction deleted",
        data: result,
      });
    }
    return res
      .status(403)
      .json({ description: "You dont have permision to do that" });
  } catch (error) {
    return res.status(400).json({ description: error.message });
  }
};
