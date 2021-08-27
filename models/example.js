const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });
const courses = require('../models/courses.js')
courses.create({
    'course code':10101,
    'course title':'wee',
    'level':100,
    'semester':'ddadd',
    'department':'frfsf'
})
// const StudentInfoSchema = new Schema({
//     firstName: {
//         type: String,
//         required: [true, 'Please provide first name'],
//     },
//     middleName: {
//         type: String,
//         required: [true, 'Please provide middle name']
//     },
//     surName: {
//         type: String,
//         required: [true, 'Please provide surname']
//     },
// })
// const BlogPost = mongoose.model('BlogPost',StudentInfoSchema);
// BlogPost.create({
//     firstName: 'The Mythbustn Energy Bills',
//     middleName: " might er went on ITV Tonight to",
//     surName: "eebje"
// }, (
//         error, blogpost) =>{
//     console.log(error,blogpost)
//     })