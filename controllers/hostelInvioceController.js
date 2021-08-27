const StudentInfo = require('../models/StudentInfo.js')
const hostelInvoice = require('../models/hostel.js')

module.exports = async (req, res) =>{
const studentInfo = await StudentInfo.find({userid:req.session.userId}).populate('userid',);
const hostel_Invoice = await hostelInvoice.find({userid:req.session.userId});
res.render('hostel_invoice',{
studentInfo, 
hostel_Invoice

})
}
