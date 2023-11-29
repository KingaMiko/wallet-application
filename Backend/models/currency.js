import { model, Schema } from "mongoose";

const currencySchema = {
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  valueInUSD: {
    type: Number,
  },
};

const currency = new Schema(currencySchema);

export default model("currency", currency);
