const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true
    },
    email: {
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        trim:true
        // validate: {
        //     validator: function (email) {
        //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        //     }, message: 'Please fill a valid email address', isAsync: false
        // }
    },
    mobile: {
        type: Number,
        required:true,
        unique: true,
        trim:true
        // match: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        // min: 10,
        // max: 10
    },
    collegeId: {
        type: ObjectId,
        ref: "College",
        required: true,
        trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false,
        trim:true
    }

}, { timestamps: true });

module.exports = mongoose.model('Intern', internSchema)