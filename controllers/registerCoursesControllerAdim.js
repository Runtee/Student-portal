const courses = require('../models/registered_course.js')

module.exports =async (req, res) => {
    await courses.create({
        ...req.body,
        userid: req.session.userId
    },
    res.redirect('/dashboard/course-registration/print'))
}



