const mongoose = require("mongoose");

const connectdb = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected");

  } catch (err) {

    console.log(err);

    process.exit(1);
  }
};

module.exports = connectdb;