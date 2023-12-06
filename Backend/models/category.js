import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
  description: String,
  thumbUrl: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("category", categorySchema);
