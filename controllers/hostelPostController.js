const path = require('path')
const hostelInvoice = require('../models/hostel.js')

module.exports =async (req, res) => {
  await  hostelInvoice.create({
        ...req.body,
        userid: req.session.userId
    },res.redirect('/dashboard/hostel/invoice'))
}



