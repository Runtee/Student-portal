const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });
const courses = require('../models/courses.js')
// courses.create({
//     'course code':10101,
//     'course title':'wee',
//     'level':100,
//     'semester':'ddadd',
//     'department':'frfsf'
// })
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
//     new:{
//         type:String
//     }
// })
// // const registeredCourses = mongoose.model('registeredCourses', CourseSchema);
// // module.exports = registeredCourses
// const BlogPost = mongoose.model('BlogPost',StudentInfoSchema);
// BlogPost.create({
//     firstName: 'The Mythbustn Energy Bills',
//     middleName: " might er went on ITV Tonight to",
//     surName: "eebje"
// }, (
//         error, blogpost) =>{
//     // console.log(error,blogpost)
//     })
// var query = {'surName':'eebje'}
// var newd = {'surName':'oooodfso1','new':'0o9o'}
// BlogPost.findOneAndUpdate(query,newd,{upsert:true}, (err,blog)=>{
//     console.log(err,blog);
// })



// const mongodb = require('mongodb');


const StudentInfoScchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique:true,
        required: true
        },
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
    },
    middleName: {
        type: String,
        required: [true, 'Please provide middle name']
    },
    surName: {
        type: String,
        required: [true, 'Please provide surname']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        
    },
    faculty: {
        type: String,
        required: [true, 'Please provide faculty'],
    },
    department: {
        type: String,
        required: [true, 'Please provide department'],
    },
    DOB: {
        type: String,
        required: [true, 'Please provide date of birth'],
    },
    sex: {
        type: String,
        required: [true, 'Please provide sex'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide phone'],
    }, 
    parent: {
        type: String,
        required: [true, 'Please provide Parent/Guardian name'],
    },
    state: {
        type: String,
        required: [true, 'Please provide State of origin'],
    },
    LGA: {
        type: String,
        required: [true, 'Please provide Local Government of Origin'],
    },

    image: {
        type: String,
        required: [true, 'Please provide your passport'],
    }, 
    updated: {
        type:String
    }
})




const StduentInfo = mongoose.model('StduentInfo', StudentInfoScchema);
module.exports = StduentInfo

// 613894864bc37845e5ad0e56

var faith = StduentInfo.findOne({userid:'613894864bc37845e5ad0e56'},(error,std)=>{
    console.log(error,std);
})

faith.update({sex:'female',updated:''},(er,up)=>{
    console.log(er,up);
})