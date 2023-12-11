import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  type: {
    type: String,
    required: true,
    num: ["Income", "Expense"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default model("category", categorySchema);
