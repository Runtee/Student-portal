const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });
const path = require('path')
const cosReg = require('../models/cos_reg.js')
const User = require('../models/StudentInfo.js')
const courses = require('../models/courses.js')

module.exports =async (req,res)=>{
    const StudentInfo = await User.find({userid:req.session.userId}).populate('userid');
    const cosreg = await cosReg.find({userid:req.session.userId}).populate('userid');
    const course = await courses.find({'level':cosreg[cosreg.length-1].level,'department':StudentInfo[0].department, 'semester':cosreg[cosreg.length-1].semester,}); 
    res.render('register course',{
        course  
    })

}

