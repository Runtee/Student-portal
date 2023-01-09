exports.changePasswordView = (req, res) => {
    res.render('change password', {
        errors: req.flash('validationErrors')
    })
}
exports.changePassword = async (req, res) => {
    const { password, newPassword, Confirmpassword } = req.body;
    var id = req.session.userId
    const newhash = await bcrypt.hash(newPassword, 10) 
    User.findById(id, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.login.password, (error, same) => {
                if (same) {
                    if (newPassword === Confirmpassword) {
                        // var usr = bcrypt.hash(newPassword, 10)
                        User.findByIdAndUpdate(id, {'login.password':newhash}, (err, upd) => { 
                            if(upd){
                                res.redirect('/dashboard/change-password/successful')
                            }
                        });

                    }
                    else {
                        const validationErrors = ['confirm password is not the same with new password']
                        req.flash('validationErrors', validationErrors)
                        req.flash('data', req.body)
                        res.redirect('/dashboard/change-password')

                    }
                }
                else{
                    const validationErrors = ['password is not correct']
                        req.flash('validationErrors', validationErrors)
                        req.flash('data', req.body)
                        res.redirect('/dashboard/change-password')

                }
            })
        }
    })
}
exports.changePasswordView = (req, res)=>{
    res.render('password')
}
exports.profileView = async (req, res) => {
    const studentInfo = await StudentInfo.find({ _id: req.session.userId }).populate('userid');
    res.render('profile', {
        studentInfo,
    },
    )
}
exports.profile = async (req, res) => {
    try{
        var updateStudentInfo = await StudentInfo.findOne({_id:req.session.userId})
        var newp= req.body
        console.log(newp);
        updateStudentInfo.updateMany(newp,(er,up)=>{
            console.log(er,up);
        })
    
    }
    catch(error){
        req.flash("error","an error occurred")
        res.redirect('/dashboard/profile')
    }
    
}