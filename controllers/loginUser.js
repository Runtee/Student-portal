const bcrypt = require('bcrypt')
const User = require('../models/StudentInfo')
module.exports = (req, res) =>{
    const { username, password } = req.body;
    User.findOne({ "login.username": username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.login.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id// if passwords match
                    // // store user session
                    req.session.user = user 
                    res.redirect('/dashboard')
                }
                else {
                    const validationErrors = ['Password is incorrect']
                    req.flash('validationErrors', validationErrors)
                    req.flash('data', req.body)

                    res.redirect('/')
                }
            })
        }
        else {
            const validationErrors = ['Username is incorrect']
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            res.redirect('/')
        }
    })}

