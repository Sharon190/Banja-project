const express = require("express");
const router = express.Router();
const User = require("../models/salesmodel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("saleslogin");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.authenticate(
      req.body.fname,
      req.body.password
    );
    req.session.user = user;
    console.log(user);
    res.render("customerReg")
  } catch {
    res.send("Login Failed");
  }
});




module.exports = router;