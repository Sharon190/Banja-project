const express = require("express");

const router = express.Router();

const User = require('../models/customerModel');




    
router.get("/", async (req, res) => {
  try {
    let items = await User.find();
    res.render("customerlist", { customers: items });
  } catch (error) {
    console.log("Could not fetch tasks from the database");
  }
});


   

    module.exports = router;
   
      
      


