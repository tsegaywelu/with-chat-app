//this model is to password,name and email of users
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      default: "admin",
    },
    //here i will always add type =user and type =admin
  },
  { timestamps: true }
);

const User = mongoose.model("allUsers", userSchema);
module.exports = User;
