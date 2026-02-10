const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false;

exports.connect = async () => {

  if (isConnected) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connection Failed");
    console.log(error);
  }
};
