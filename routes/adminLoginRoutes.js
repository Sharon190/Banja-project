const express = require("express");

const router = express.Router();

const User = require('../models/salesmodel');


router.get('/',(req,res)=>{
    res.render('adminLogin')
  })

  router.post("/", async (req, res) => {
    try {
      const user = await User.authenticate(
        req.body.fname,
        req.body.password
      );
      req.session.user = user;
      console.log('user');
      res.redirect("/sale")
    } catch {
      res.send("Login Failed");
    }
  });
    
      
      module.exports = router;