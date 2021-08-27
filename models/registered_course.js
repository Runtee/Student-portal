// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const CourseSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
        courses: {
        type: Array,
        required: [true, 'Please select courses'],
    }
})

const registeredCourses = mongoose.model('registeredCourses', CourseSchema);
module.exports = registeredCourses

