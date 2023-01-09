const StudentInfo = require('../models/StudentInfo.js')
module.exports = async (req, res) => {
    const studentInfo = await StudentInfo.find({ _id: req.session.userId }).populate('userid');
    res.render('profile', {
        studentInfo,
    },
    )
}
