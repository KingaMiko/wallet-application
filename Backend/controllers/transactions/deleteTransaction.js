import Transaction from "#models/transaction.js";
import User from "#models/user.js";
import { updateUser } from "#helpers/transactionHelper.js";

/**
 * @typedef {string} Id
 * @property {string} id.required - type of transaction
 */

/**
 * DELETE /api/transactions/{id}
 *
 * @security BearerAuth
 * @param {string} id.path.required - ID of the transaction to delete
 * @return {ResponseSchema} 200 - Success, transaction deleted
 * @return {ResponseSchema} 403 - No authorization
 * @return {ResponseSchema} 400 - Error: Bad Request
 * @return {ResponseSchema} 404 - Not Found, transaction not found
 */

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user.id;

  try {
    const ourTransaction = await Transaction.findOne({
      _id: id,
      owner: ownerId,
    });
    if (!ourTransaction) {
      return res.status(404).json({ description: "Transaction not found" });
    }

    const ourUser = await User.findById(ownerId);
    if (!ourUser) {
      return res.status(404).json({ description: "User not found" });
    }

    // Adjust user's balance
    if (ourTransaction.type === "Income") {
      await updateUser(ourUser.id, {
        balance: ourUser.balance - ourTransaction.sum,
      });
    } else if (ourTransaction.type === "Expense") {
      await updateUser(ourUser.id, {
        balance: ourUser.balance + ourTransaction.sum,
      });
    }

    // Delete the transaction
    await Transaction.findByIdAndDelete(id);
    return res.status(200).json({
      statusCode: 200,
      description: "Transaction deleted",
    });
  } catch (error) {
    return res.status(400).json({ description: error.message });
  }
};
