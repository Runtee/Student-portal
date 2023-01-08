const cosReg = require('../models/cos_reg.js')

exports.cosRegView = (req, res) =>{
    res.render('cos_reg')
    }
    exports.cosRegViewAdmin =  (req, res) =>{
        res.render('cos_reg adim')
        }

exports.cosRegPostView = async (req, res) => {
   await cosReg.create({
        ...req.body,
        userid: req.session.userId
    },res.redirect('/dashboard/course-registration/register'))
}
exports.cosRegPostViewAdim = async (req, res) => {
    await courses.create({
         ...req.body,
         
     },res.redirect('/adim/dashboard/courses/'))
 }