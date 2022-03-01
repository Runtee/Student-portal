const path = require('path')
const User = require('../models/StudentInfo.js')

module.exports = (req, res) => {

    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/images', image.name), async (error) => {
        await User.create({
            ...req.body,
            image: '/images/' + image.name,
            userid: req.session.userId
        }, (error, user) => {
            console.log(error)
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key =>
                    error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/register')
            }
        })
        res.redirect('/adim/dashboard/fresh/successful')
    })



}


