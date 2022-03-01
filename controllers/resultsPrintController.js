const resultStore = require('../models/resultStore.js')
const inputedResult = require('../models/resultInput')
const User = require('../models/StudentInfo.js')
const courses = require('../models/courses.js')

module.exports = async (req, res) => {
    const studentInfo = await User.find({ userid: req.session.userId }).populate('userid');
    const results = await resultStore.find({ userid: req.session.userId })
    var result = await inputedResult.find({
        'level': results[results.length - 1].level,
        'regNo': studentInfo[0].userid.username,                                                 
        'session': results[results.length - 1].session,
        'semester': results[results.length - 1].semester,
    })
    if (result[0]==undefined|| result[0]==null){
        var result  = undefined
        var cosName  = undefined
        
    }
else{
    var cosC = await result[0].courseCode;
    var cosName = []
    for (let i = 0;i< cosC.length; i++){
         await courses.find({courseCode:cosC[i]},(error,co)=>{
                    cosName.push(co[0].courseTitle)})
    }
}   
    res.render('print_results', {
        result, studentInfo,cosName
    }, console.log(result,studentInfo,cosName)
    )
}