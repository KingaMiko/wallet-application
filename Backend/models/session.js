import { model, Schema } from "mongoose";

const sessionSchema = {
  refreshToken: {
    type: String,
  },
};

const session = new Schema(sessionSchema);

export default model("session", session);
