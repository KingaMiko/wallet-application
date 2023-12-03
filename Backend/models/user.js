import { model, Schema } from "mongoose";
import bCrypt from "bcryptjs";

const userSchema = {
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "First name is required"],
  },
  balance: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    default: "PLN",
  },
  // tokeny autoryzacji jwt bearer token
  token: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  // status weryfikacji użytkownika (za pomocą linka z maila)
  verified: {
    type: Boolean,
    default: false,
  },
  // token do weryfikacji użytkownika który trzeba zapisać w bazie w tym polu i potem wysłać mailem
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
};

const user = new Schema(userSchema);

user.methods.setPassword = async function (password) {
  const salt = await bCrypt.genSalt(6);
  const saltedPassw = await bCrypt.hash(password, salt);

  this.password = saltedPassw;
};

user.methods.validPassword = async function (password) {
  return await bCrypt.compare(password, this.password);
};

export default model("user", user);
