const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
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

const resultStore = mongoose.model('resultStore', ResultSchema);
module.exports = resultStore

