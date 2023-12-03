import { model, Schema } from "mongoose";

const currencySchema = {
  currency: {
    type: String,
  },
  code: {
    type: String,
  },
  bid: {
    type: Number,
  },
  ask: {
    type: Number,
  },
};

const currency = new Schema(currencySchema);

export default model("currency", currency);
