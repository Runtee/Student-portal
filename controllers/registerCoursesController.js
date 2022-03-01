const courses = require('../models/registered_course.js')
const cosReg = require('../models/cos_reg.js')
const User = require('../models/StudentInfo.js')


module.exports =async (req, res) => {
    const cosreg = await cosReg.find({userid:req.session.userId}).populate('userid');
    const StudentInfo = await User.find({userid:req.session.userId}).populate('userid');

    courses.create({
        ...req.body,
        session:cosreg[cosreg.length-1].session,
        level:cosreg[cosreg.length-1].level,
        semester:cosreg[cosreg.length-1].semester,
        regNo: StudentInfo[0].userid.username, 
        userid: req.session.userId
    },    res.redirect('/dashboard/course-registration/print')

    )
}
