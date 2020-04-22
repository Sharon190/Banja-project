const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const nameSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: "Please Enter username"
  },
  password: {
    type: String,
    required: "Please Enter password"
  },
  phoneNumber: Number,
  email: String,
  workingDays: String,
  currentDate: Date
});

//Password should be encrypted 10 times
nameSchema.pre("save", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});

//Get username and password and check in the DB for
nameSchema.statics.authenticate = async function(
  fname,
  password
) {
  const user = await this.findOne({
    fname: fname
  });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(
    password,
    user.password
  );
  if (match) {
    return user;
  }
};

//create a model
module.exports = mongoose.model("sale",nameSchema);