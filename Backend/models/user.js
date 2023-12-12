import { model, Schema } from "mongoose";
import bCrypt from "bcryptjs";

import Category from "#models/category.js";

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
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
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

user.methods.setDefCategories = async function () {
  const categoryTypes = {
    EXP: "Expense",
    INC: "Income",
  };

  const { EXP, INC } = categoryTypes;

  const defaultCategories = [
    { name: "Products", type: EXP },
    { name: "Car", type: EXP },
    { name: "Food", type: EXP },
    { name: "Self Care", type: EXP },
    { name: "Child Care", type: EXP },
    { name: "Household Products", type: EXP },
    { name: "Education", type: EXP },
    { name: "Leisure", type: EXP },
    { name: "Job", type: INC },
    { name: "Extra", type: INC },
  ];

  for (const category of defaultCategories) {
    const defUserCategoryExist = await Category.findOne({ name: category.name }).lean();

    if (!defUserCategoryExist) {
      const newDefUserCategory = new Category(category);
      newDefUserCategory.default = true;
      await newDefUserCategory.save();

      this.categories.push(newDefUserCategory._id);
    } else {
      this.categories.push(defUserCategoryExist._id);
    }
  }
};

export default model("user", user);
