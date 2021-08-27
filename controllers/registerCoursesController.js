const courses = require('../models/registered_course.js')

module.exports = (req, res) => {
    courses.create({
        ...req.body,
        userid: req.session.userId
    },
    res.redirect('/dashboard/course-registration/print'))
}



