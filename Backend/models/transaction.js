import { model, Schema, SchemaTypes } from "mongoose";

const transactionSchema = {
  type: {
    type: String,
    enum: ["Income", "Expense"],
    required: [true, "Transaction type is required"],
  },
  category: {
    type: SchemaTypes.ObjectId,
    ref: "category",
  },
  sum: {
    type: Number,
    required: [true, "Transaction sum is required"],
  },
  comment: {
    type: String,
    maxlength: [100, "Comment is too long (maximum 100 characters)"],
  },
  date: {
    type: Date,
    required: [true, "Transaction date is required"],
  },
  owner: {
    type: SchemaTypes.ObjectId,
    index: 1,
    required: [true, "owner is required"],
  },
};

const transaction = new Schema(transactionSchema);

export default model("transaction", transaction);
