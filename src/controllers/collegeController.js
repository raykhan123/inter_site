const collegeModel = require("../models/collegeModel")
const interModel = require("../models/InternModel")


const createCollege = async function (req, res) {
    try{
    let college = req.body 
    if(!(college.name && college.fullName &&college.logoLink) ){
        return res.status(400).send({status : false, msg : "All fields are mandatory."})
    }
    let collegeCreated = await collegModel.create(college)
    res.status(201).send({ status : true , data: collegeCreated })

    }catch(err){
        return res.status(500).send({ msg: err.message})
    }
}

module.exports.createAuthor = createCollege