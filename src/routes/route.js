const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const interController = require("../controllers/internController")


router.post("/functionup/colleges", authorController.createAutho)

router.post("/functionup/colleges",collegeController.createCollege)


router.post("/functionup/interns",interController.createintern)

router.get("/functionup/collegeDetails")



module.exports = router;