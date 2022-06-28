const collegeModel = require("../models/collegeModel")
const interModel = require("../models/InternModel")


const createCollege = async function (req, res) {
    try{
    let college = req.body 
    let collegeCreated = await collegModel.create(college)
    res.status(201).send({ status : true , data: collegeCreated })

    }catch(err){
        return res.status(500).send({ msg: err.message})
    }
}

module.exports.createAuthor = createCollege