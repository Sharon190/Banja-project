const express = require("express");

const router = express.Router();

const User = require('../models/salesmodel');




    
// router.get("/", async (req, res) => {
//   try {
//     let items = await User.find();
//     res.render("saleslist", { sales: items });
//   } catch (error) {
//     console.log("Could not fetch tasks from the database");
//   }
// });

router.get('/',async(req, res) => {
  try {
  let items = await User.find()
  if (req.query.fname) {
    items = await User.find({fname:req.query.fname})
  }
  res.render('saleslist', { sales: items })
} catch (err) {
  res.status(400).send("unable to find items in the database");
}
})


   

    module.exports = router;
   
      
      


