const mongoose = require("mongoose");

var registerSchema = new mongoose.Schema({
    fname: String,
    lastName: String,
    nationality: String,
    nin:String,
    status:String,
    phoneNumber:Number,
    date:Date,
    kindOfVehicle:String,
    loan:String,
    downpayment:String,
    refereeName:String,
    workOfReferee:String,
    refereePhoneNumber:String,
    refereeDateOfBirth:Date,
    currentDate:Date,
    stageName:String,
    council:String
    
    
  })
  
  
  module.exports = mongoose.model("customer", registerSchema);
  