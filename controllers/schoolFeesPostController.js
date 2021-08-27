const path = require('path')
const feesInvoice = require('../models/schoolfeesInvoice.js')

module.exports = (req, res) => {
    feesInvoice.create({
        ...req.body,
        userid: req.session.userId
    },res.redirect('/dashboard/Schoolfees/invoice'))
}



