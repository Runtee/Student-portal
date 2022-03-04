module.exports = (req, res) =>{
    res.render('fresh adim',{
        errors:req.flash('validationErrors')
    })
    }