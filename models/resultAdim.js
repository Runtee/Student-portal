// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const ResultSchema = new Schema({
    regNo: {
        type: String,
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

const resultAdimStore = mongoose.model('resultStoreAdim', ResultSchema);
module.exports = resultAdimStore

