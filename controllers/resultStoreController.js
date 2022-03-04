const result = require('../models/resultStore.js')

module.exports = async (req, res) => {
    await result.create({
        ...req.body,
        userid: req.session.userId
    },
    res.redirect('/dashboard/result/print'))
}



