const StudentInfo = require('../models/StudentInfo.js')
module.exports = async (req,res)=>{
    const studentInfo = await StudentInfo.find({}).populate('userid');
    res.render('students',{studentInfo}, console.log(studentInfo))
}