const path = require('path')
const Adim = require('../models/userAdim.js')
module.exports = async(req, res) => {
   await Adim.create(req.body, (error, adim) => {

        if (error) {
            if (Object.keys(error.errors) == 'username') {
                const validationErrors = 'Username already exists'
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/fresh');
            }
            else {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/fresh');
            }



        }
        else {
            req.session.adimId = adim._id
            res.redirect('/adim');
        }
    }
    )
}



