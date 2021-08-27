const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true, useUnifiedTopology: true });
const path = require('path')
const cosReg = require('../models/cos_reg.js')
const User = require('../models/StudentInfo.js')
const courses = require('../models/courses.js')
const registered_course = require('../models/registered_course')

// const StudentInfo =  User.find({ userid: req.session.userId }).populate('userid');
var cosz = []

var registered_courses = []

function nepw() {
        registered_course.find({ userid: '611524052560011fce501ad8' }, (error, cos) => {
                // console.log(cos),
                // cosc = cos
                        // console.log(cosc);
                var registered_courses = [...cos]
                return cos
        })
};
console.log(nepw())


// const cos =  registered_courses[registered_courses.length - 1];
// console.log(cos);
// var cosName = []
// for (let i = 0; i < cos.length; i++) {
//     cosName.push((courses.find({ 'courseCode': cos[i] },(error,cosNa)=>{
//         return cosNa.courseTitle })))

// }
// console.log(cosName);
// const cosreg =  cosReg.find({ userid: '611524052560011fce501ad8'})
// console.log(cosName)
//     // res.render('print_cos_reg', {
//     //     StudentInfo,
//     //     cosreg,
//     //     cos,
//     //     cosName


//     // },console.log(cosName))
