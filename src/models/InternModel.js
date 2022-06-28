const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is mandatory"
    },
    email: {
        type: String,
        required: "email is mandatory",
        unique: true,
        lowercase: true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            }, message: 'Please fill a valid email address', isAsync: false
        }
    },
    mobile: {
        type: Number,
        required: "mobile is mandatory",
        unique: true,
        match: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        min: 10,
        max: 10
    },
    collegeId: {
        type: ObjectId,
        ref: "College",
        required: "CollageId is mandatory"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model('College', internSchema)