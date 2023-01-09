const feesInvoice = require('../models/schoolfeesInvoice.js')
const StudentInfo = require("../models/StudentInfo")
const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
  try{
    const invoiceNumer = uuidv4()
    const fees = await feesInvoice.findOne({ ...req.body, userid: req.session.userId })
    const studentInfo = await StudentInfo.find({ _id: req.session.userId });
    if (fees) {
      res.render('paySchool', {
        studentInfo,
        schoolInvoice: fees
  
      })
    }
    const schoolInvoice = await feesInvoice.create({
      ...req.body,
      invoiceNumer,
      userid: req.session.userId
    })
    res.render('paySchool', {
      studentInfo,
      schoolInvoice
    })
  }
  catch(error){
    throw error
  }
}



