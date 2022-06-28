const collegeModel = require("../models/collegeModel")
const interModel = require("../models/InternModel")


const createCollege = async function (req, res) {
    try{
    let college = req.body 
    if(!college) return res.satus(400).send({status:false, msg: "Please enter the fields"})
    let collegeCreated = await collegModel.create(college)
    res.status(201).send({ status : true , data: collegeCreated })

    }catch(err){
        return res.status(500).send({ msg: err.message})
    }
}

module.exports.createAuthor = createCollege