const bcrypt = require('bcrypt')
const Adim = require('../models/userAdim')
module.exports = (req, res) =>{
const { username, password } = req.body;
Adim.findOne({username:username}, (error,user) => {
if (user){
bcrypt.compare(password, user.password, (error, same) =>{
if(same){ 
    req.session.userId = user._id// if passwords match
// // store user session
res.redirect('/adim/dashboard')
}
else{
    const validationErrors = ['Password is incorrect']
    req.flash('validationErrors',validationErrors)
    req.flash('data',req.body)
    
res.redirect('/adim')
}
})
}
else{
    const validationErrors = ['Username is incorrect']
    req.flash('validationErrors',validationErrors)
    req.flash('data',req.body)
res.redirect('/adim')
}
})
}

