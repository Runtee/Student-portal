module.exports = (req, res) =>{
    res.render('index',{
        errors:req.flash('validationErrors')})
    }