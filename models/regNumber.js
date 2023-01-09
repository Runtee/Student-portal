const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegNumberSchema = new Schema({
    year: Number,
    numb: {
        type: Number,
        default: 0
        // required: [false, 'Please provide semester']
    }


})


const RegNumber = mongoose.model('RegNumber', RegNumberSchema);
module.exports = RegNumber

