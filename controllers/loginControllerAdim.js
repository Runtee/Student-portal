module.exports = (req, res) =>{
    res.render('index adim',{
        errors:req.flash('validationErrors')})
    }