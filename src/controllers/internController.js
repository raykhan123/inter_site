let validator = require('validator'); //require validator form npm
const mongoose = require('mongoose'); //require mongoose form mongoose
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

//<----------------------------create a fucntion for checking up typeof and lenghth----------------->//

const isvalid = function (value) {
    if (!value || typeof value != "string" || value.trim().length == 0) return false
    return true
}

//<---------------------------------define callback function for mobilePhone----------------------->//
let isValidMobile = function (number) {
    let mobileRegex = /^[6-9]{1}[0-9]{9}$/;
    return mobileRegex.test(number);
}
//<--------------------------------createInter route handler------------------------------>//
const createintern = async function (req, res) {
    try {
        let data = req.body
        let collegeName = req.body.collegeName

        if (Object.keys(data).length <= 0)
            return res.status(400).send({ status: false, msg: "please provide data" })

        if (!data.name)
            return res.status(400).send({ status: false, msg: "please provide name" })
        if (!isvalid(data.name))
            return res.status(400).send({ status: false, msg: "please provide alphabetic character" })

        if (!data.email)
            return res.status(400).send({ status: false, msg: "please provide email" })
        if (!validator.isEmail(data.email))
            return res.status(400).send({ status: false, msg: "please input proper format - eg'name@gmail.com'" })

        // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // let mailtest = data.email
        // let emailValidate = regex.test(mailtest)

        // if(!emailValidate)
        // return res.status(400).send({status:false,msg:"please provide valid email"})
        let emailCheck = await interModel.findOne({ email: data.email })
        if (!emailCheck)
            return res.status(400).send({ status: false, msg: "This email-Id is already use" })


        if (!data.mobile)
            return res.status(400).send({ status: false, msg: "please provide mobile" })
        if (!isValidMobile(data.mobile))
            return res.status(400).send({ status: false, msg: "please input 10 digit number" })
        let mobileNumberCheck = await interModel.findOne({ mobile: data.mobile })
        if (!mobileNumberCheck)
            return res.status(400).send({ status: false, msg: "Mobile number already use" })


        let collegeNamecheck = await collegeModel.findOne({ name: collegeName })
        if (!collegeNamecheck)
            return res.status(400).send({ status: false, msg: "college name does't exits" })

        collegedata = collegeNamecheck._id.tostring();
        data.collegeId = collegedata


        // if (!data.collegeId)
        //     return res.status(400).send({ status: false, msg: "please provide collegeId" })

        // //<----------------------------check collegeId number------------------------------->
        // if (!mongoose.isObjectIdOrHexString(data.collegeId))
        //     return res.status(400).send({ status: false, msg: "collegeId number's is incorrect" })


        let saveData = await internModel.create(data)

        res.status(201).send({ status: true, data: saveData })
    }
    catch (error) {
        console.log(error.message)
        res.satus(500).send({ status: false, msg: error.message })

    }
}

module.exports = { createintern }
