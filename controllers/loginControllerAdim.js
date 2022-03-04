const Admin = require('../models/userAdim.js')
module.exports = async(req, res) =>{
    let admin = await Admin.findOne({ username: 'admin' })
    if (!admin) {
        Admin.create({ username: 'admin', password: 'admin' })
    }
    res.render('index adim',{
        errors:req.flash('validationErrors')})
    }
