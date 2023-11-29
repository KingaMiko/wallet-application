import { model, Schema } from "mongoose";

const categorySchema = {
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
  description: String,
  thumbUrl: String,
};

const category = new Schema(categorySchema);

export default model("category", category);
