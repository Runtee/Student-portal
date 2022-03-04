const resultI = require('../models/resultAdim')
const registered_course = require('../models/registered_course')


module.exports =  async(req,res)=>{
    const resultreg = await resultI.find({});
    const course = await registered_course.find({'level':resultreg[resultreg.length-1].level, 
                                                 'regNo':resultreg[resultreg.length-1].regNo, 
                                                 'session':resultreg[resultreg.length-1].session, 
                                                 'semester':resultreg[resultreg.length-1].semester,}); 
  
    const cours = (course[course.length-1])                                 
    res.render('input_results adim.ejs',
    {
        cours
    },
    )
}