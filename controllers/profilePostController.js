const StudentInfo = require('../models/StudentInfo')

module.exports = async (req, res) => {
    try{
        var updateStudentInfo = await StudentInfo.findOne({_id:req.session.userId})
        var newp= req.body
        console.log(newp);
        updateStudentInfo.updateMany(newp,(er,up)=>{
            console.log(er,up);
        })
    
    }
    catch(error){
        req.flash("error","an error occurred")
        res.redirect('/dashboard/profile')
    }
    

}
// StudentInfo.save()
