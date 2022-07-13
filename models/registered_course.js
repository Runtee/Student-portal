// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const CourseSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StduentInfo',
        required: true
    },
    regNo: {
        type: String,
        required: [true, 'Please select regNo'],
    },
    courses: {
        type: Array,
        required: [true, 'Please select courses'],
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

const registeredCourses = mongoose.model('registeredCourses', CourseSchema);
module.exports = registeredCourses

