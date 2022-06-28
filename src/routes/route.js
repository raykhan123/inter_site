const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const interController = require("../controllers/internController")

<<<<<<< HEAD
router.post("/functionup/colleges", authorController.createAutho)
=======
router.post("/functionup/colleges",collegeController.createCollege)
>>>>>>> cab49fe8c3545f7e5c371d8e8637e9a68cd91ab7

router.post("/functionup/interns",interController.createintern)

router.get("/functionup/collegeDetails")



module.exports = router;