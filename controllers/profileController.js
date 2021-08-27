const StudentInfo = require('../models/StudentInfo.js')
module.exports = async (req, res) => {
    const studentInfo = await StudentInfo.find({ userid: req.session.userId }).populate('userid');
    res.render('profile', {
        studentInfo,
    },

    )
}
