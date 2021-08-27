const path = require('path')
const cosReg = require('../models/cos_reg.js')

module.exports = (req, res) => {
    cosReg.create({
        ...req.body,
        userid: req.session.userId
    },res.redirect('/dashboard/course-registration/register'))
}



