const express = require('express');
const router = express.Router();

router.post("/functionup/colleges", authorController.createAutho)

router.post("/functionup/interns")

router.get("/functionup/collegeDetails")



module.exports = router;