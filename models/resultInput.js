// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const inputedResultSchema = new Schema({
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
    ,
    courseCode: {
        type: Array,
        required: [true, 'Please provide courseCode']
    },
    score: {
        type: Array,
        required: [true, 'Please provide score']
    }
    ,
    grade: {
        type: Array,
        required: [true, 'Please provide grade']
    }
})

const inputedResult = mongoose.model('inputedResult', inputedResultSchema);
module.exports = inputedResult

