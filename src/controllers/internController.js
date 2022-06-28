const collegeModel = require("../models/collegeModel")
const interModel = require("../models/InternModel")

const createintern = async function(req,res){
    try{
        let data = req.body
        let saveData = await interModel.create(data)
        res.status(200).send({status:true, data:saveData})
    }
    catch(error){
        console.log(error.message)
        res.satus(500).send({status:false, msg: error.message})

    }
}

module.exports={createintern}