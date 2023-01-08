// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courses:{
        type :[{
            courseCode: {
                type: String,
                required: true
            },
            courseTitle: {
                type: String,
                    required: true
            },
        }
            
        ],
        required:true
    },
     
    semester: {
        type: String,
        required: true
    }, 
    level: {
        type: String,
        required: true
    }, 
    department: {
        type: String,
         required: true
    }

})

const Courses = mongoose.model('course', CourseSchema);
module.exports = Courses
 