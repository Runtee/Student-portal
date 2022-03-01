const StudentInfo = require('../models/StudentInfo')

module.exports = async (req, res) => {
    var newk = {'userid': req.session.userId } ;
    var updateStudentInfo = await StudentInfo.findOne({userid:req.session.userId})
    var newp= req.body
    console.log(newp);
    updateStudentInfo.updateMany(newp,(er,up)=>{
        console.log(er,up);
    })

}
// StudentInfo.save()
