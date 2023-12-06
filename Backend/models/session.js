import { model, Schema } from "mongoose";

const sessionSchema = {
  refreshToken: {
    type: String,
  },
  issuedAt: {
    type: Number,
  },
  expireAt: {
    type: Number,
  },
};

const session = new Schema(sessionSchema);

export default model("session", session);
