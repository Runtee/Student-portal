module.exports = (req, res) =>{
    res.render('fresh',{
        errors:req.flash('validationErrors')
    })
    }