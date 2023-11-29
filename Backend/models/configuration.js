import { model, Schema } from "mongoose";

const configurationSchema = {
  theme: String,
};

const configuration = new Schema(configurationSchema);

export default model("configuration", configuration);
