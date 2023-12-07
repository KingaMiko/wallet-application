import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  thumbUrl: {
    type: String,
    default: "default-thumbnail-url.jpg",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export default model("category", categorySchema);
