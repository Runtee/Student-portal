const cosReg = require('../models/cos_reg.js')

exports.cosRegView = (req, res) =>{
    res.render('cos_reg')
    }
    exports.cosRegViewAdmin =  (req, res) =>{
        res.render('cos_reg adim')
        }

exports.cosRegPostView = async (req, res) => {
   await cosReg.create({
        ...req.body,
        userid: req.session.userId
    },res.redirect('/dashboard/course-registration/register'))
}
exports.cosRegPostViewAdim = async (req, res) => {
    await courses.create({
         ...req.body,
         
     },res.redirect('/adim/dashboard/courses/'))
 }
 exports.printCourseView = async (req, res) => {
    const studentInfo = await User.find({ userid: req.session.userId }).populate('userid');
    var cosC = [];
    await registered_course.find({ userid: req.session.userId },(error,reg_cos)=>{
        // console.log(reg_cos[reg_cos.length -1].courses);
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
exports.registerCosView =async (req,res)=>{
    const StudentInfo = await User.find({userid:req.session.userId}).populate('userid');
    const cosreg = await cosReg.find({userid:req.session.userId}).populate('userid');
    const course = await courses.find({'level':cosreg[cosreg.length-1].level,'department':StudentInfo[0].department, 'semester':cosreg[cosreg.length-1].semester,}); 
    res.render('register course',{
        course  
    })

}
exports.registerCosViewAdmin =async (req,res)=>{
    const StudentInfo = await User.find({userid:req.session.userId}).populate('userid');
    const cosreg = await cosReg.find({userid:req.session.userId}).populate('userid');
    const course = await courses.find({'level':cosreg[cosreg.length-1].level,'department':StudentInfo[0].department, 'semester':cosreg[cosreg.length-1].semester,}); 
    res.render('register course',{
        course
    })

}
exports.registerCoursesView =async (req, res) => {
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
