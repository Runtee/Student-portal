const path = require('path')
const courses = require('../models/courses.js')

module.exports = async (req, res) => {
   await courses.create({
        ...req.body,
        
    },res.redirect('/adim/dashboard/courses/'))
}



