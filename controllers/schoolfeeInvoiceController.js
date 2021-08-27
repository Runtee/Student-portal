const StudentInfo = require('../models/StudentInfo.js')
const feesInvoice = require('../models/schoolfeesInvoice.js')

module.exports = async (req, res) =>{
const studentInfo = await StudentInfo.find({userid:req.session.userId}).populate('userid',);
const schoolInvoice = await feesInvoice.find({userid:req.session.userId});
res.render('paySchool',{
studentInfo, 
schoolInvoice

})
}
