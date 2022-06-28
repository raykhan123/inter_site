const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const interController = require("../controllers/internController")


router.post("/functionup/colleges", collegeController.createCollege)

router.post("/functionup/colleges",collegeController.)


router.post("/functionup/interns",interController.createintern)

router.get("/functionup/collegeDetails")



router.all('/*', async function(req, res){
    res.status(404).send({status: false, msg: "Page Not Found!!!"})
})


module.exports = router;
