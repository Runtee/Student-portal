const result = require('../models/resultAdim.js')

module.exports = async (req, res) => {
    await result.create({
        ...req.body,
    },(error,cos)=>{
        if (!error){
            res.redirect('/adim/dashboard/result/input')
        }
    },
)
}



