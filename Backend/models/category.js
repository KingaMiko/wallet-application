import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  type: {
    type: String,
    required: true,
    enum: ["Income", "Expense"],
  },
  default: {
    type: Boolean,
    default: false,
  },
});

export default model("category", categorySchema);
