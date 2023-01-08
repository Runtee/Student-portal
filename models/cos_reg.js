// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CosRegSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StduentInfo',
        required: true
        },
        session: {
        type: String,
        required: [true, 'Please provide session'],
    },
    level: {
        type: String,
        required: [true, 'Please provide level']
    },
    semester: {
        type: String,
        required: [true, 'Please provide semester']
    }
})

const cosReg = mongoose.model('cosReg', CosRegSchema);
module.exports = cosReg

