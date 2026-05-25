const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: Number,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type:String,
        default:"user",
    },
  });

module.exports = mongoose.model("User", userschema);