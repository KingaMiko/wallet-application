import { model, Schema, SchemaTypes } from "mongoose";

const transactionSchema = {
  type: {
    type: String,
    enum: ["Income", "Expense"],
    required: [true, "Transaction type is required"],
  },
  category: {
    type: String,
    ref: "category",
    required: [true, "Transaction category is required"],
  },
  sum: {
    type: Number,
    required: [true, "Transaction sum is required"],
  },
  comment: {
    type: String,
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
