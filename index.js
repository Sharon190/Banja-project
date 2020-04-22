const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();
const session = require("express-session");
const path = require("path");




//Middlewarei
server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  session({
    secret: "thesecret",
    resave: true,
    saveUninitialized: false
  })
);


//Creating a connection to database 
mongoose.connect(
  "mongodb://localhost:27017/shan-db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);


//Import routes

const homeRoute = require("./routes/home");
server.use("/", homeRoute);

const adminroutes = require('./routes/adminRoute');
server.use('/adminreg',adminroutes);

const adminlog = require('./routes/adminloginroutes');
server.use('/admin',adminlog);

const salesRoutes = require('./routes/saleRegRoutes');
server.use('/sale',salesRoutes);

const sales = require('./routes/saleList');
server.use('/saleExecutive',sales);

const salesloginroutes = require('./routes/saleslogin');
server.use('/salesLogin',salesloginroutes);

const customerregroutes = require('./routes/costomerRoutes');
server.use('/customerReg',customerregroutes);

const customerListroutes = require('./routes/customerListRoute');
server.use('/customerList',customerListroutes);

server.use(session({
  secret: 'thesecret`',
  resave: true,
  saveUninitialized: false
}));

//To access public folder
server.use(express.static('public'))


server.listen(3200,()=>{
    console.log("Listening on port 3200");
});

