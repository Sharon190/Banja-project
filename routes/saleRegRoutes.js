const express = require("express");

const router = express.Router();

const User = require('../models/salesmodel');

  
router.get("/", (req, res) => {
  res.render("sales");
});

router.post("/", async (req, res) => {
  try {
    let items = await User.find();
    res.redirect("/saleExecutive");
  } catch (error) {
    console.log("Could not fetch tasks from the database");
  }
});


// router.post("/", async (req, res) => {
//   try {
//     const user = await User.authenticate(
//       req.body.fname,
//       req.body.password
//     );
//     req.session.user = user;
//     console.log(user);
//     res.redirect("saleExecutive")
//   } catch {
//     res.send("Login Failed");
//   }
// });

   

    module.exports = router;
   
      
      


