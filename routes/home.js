const expresss = require('express');
const router = expresss.Router();


router.get("/", async (req, res) =>{

     res.render("home");


});


module.exports = router;