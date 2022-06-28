const collegeModel = require("../models/collegeModel")
const interModel = require("../models/InternModel")

let isValidMobile = function (number) {
    let mobileRegex = /^[6-9]{1}[0-9]{9}$/;
    return mobileRegex.test(number);
}

const createintern = async function(req,res){
    try{
        let data = req.body

        if(Object.keys(data).length==0)
        return res.status(400).send({status:false,msg:"please provide data"})

        if(!data.name)
        return res.status(400).send({status:false,msg:"please provide name"})

        if(!data.email)
        return res.status(400).send({status:false,msg:"please provide email"})
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let mailtest = data.email
        let emailValidate = regex.test(mailtest)

        if(!emailValidate)
        return res.status(400).send({status:false,msg:"please provide valid email"})
        let emailCheck = await interModel.find({email:data.email})
        

        if(!data.mobile)
        return res.status(400).send({status:false,msg:"please provide mobile"})
        if(!isValidMobile(data.mobile))
        return res.status(400).send({status:false,message:"please input 10 digit number"})

        if(!data.collegeId)
        if(!isValidMobile(data.collegeId))
        return res.status(400).send({status:false,msg:"please provide collegeId"})

      

       let saveData = await interModel.create(data)

        res.status(200).send({status:true, data:saveData})
    }
    catch(error){
        console.log(error.message)
        res.satus(500).send({status:false, msg: error.message})

    }
}

module.exports.createintern=createintern
