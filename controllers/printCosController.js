const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });
const cosReg = require('../models/cos_reg.js')
const User = require('../models/StudentInfo.js')
const courses = require('../models/courses.js')
const registered_course = require('../models/registered_course')

module.exports = async (req, res) => {
    const studentInfo = await User.find({ userid: req.session.userId }).populate('userid');
    var cosC = [];
    await registered_course.find({ userid: req.session.userId },(error,reg_cos)=>{
        cosC.push(reg_cos[reg_cos.length -1].courses)
    })
    const cos = await cosC[0];
    var cosName =  [];
    await cos.forEach(async i => {
        await courses.find({ 'courseCode':i},  (error,co)=>{
            cosName.push(co[0].courseTitle);
           
        })
    });
   
    const cosreg = await cosReg.find({ userid: req.session.userId }).populate('userid');
    res.render('print', {
        studentInfo,
        cosreg,
        cos,
        cosName

 

    })
}