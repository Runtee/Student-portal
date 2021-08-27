const result = require('../models/resultStore.js')

module.exports = (req, res) => {
    result.create({
        ...req.body,
        userid: req.session.userId
    },
    res.redirect('/dashboard/result/print'))
}



