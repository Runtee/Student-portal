const inputedResult = require('../models/resultInput')

module.exports = (req,res)=>{
    inputedResult.create(req.body,(error,result)=>{
        if(!error){
            res.redirect('/adim/dashboard/result')
        }
    })
    
}