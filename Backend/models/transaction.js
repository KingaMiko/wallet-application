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
};

const transaction = new Schema(transactionSchema);

export default model("transaction", transaction);
