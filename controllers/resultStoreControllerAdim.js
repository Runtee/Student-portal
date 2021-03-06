const result = require('../models/resultAdim.js')
const { parse } = require("fast-csv");
module.exports ={
 csvUpload: (req, res) =>{
    if (!req.files) return res.status(400).send("No files were uploaded.");
    var authorFile = req.files.file.data.toString();
    //   const stream = Readable.from(authorFile);
    var students = [];
    const stream = parse({
        headers: [
            "regNo",
            "score",
            "grade",
            "level",
            undefined,
            undefined,
            undefined,
            undefined,
        ],
        renameHeaders: true,
        ignoreEmpty: true
    })
        .on("error", (error) => console.error(error))
        .on("data", (data) => {
            students.push(data);
        })
        .on("end", () => {
            console.log(student.length);
        });
    stream.write(authorFile);
    stream.end();
    let info = []
    const stream2 = parse({
        headers: true[
            (undefined,
                undefined,
                undefined,
                undefined,
                'department',
                'courseCode',
                'session',
                'semester')
        ],
        renameHeaders: true,
        maxRows: 1,
        ignoreEmpty: true

    })
        .on("error", (error) => console.error(error))
        .on("data", (data) => {
            info.push(data);
        })
        .on("end", () => {
        });

    stream2.write(authorFile);
    stream2.end();
    
    var results = {
        ...info[0],
        student:students

    }
    result.create({
        results
    },(error,cos)=>{
        if (!error){
            res.redirect('/adim/dashboard/result/input')
        }
    },
)    
}
    ,
    input: async (req, res) => {
        await result.create({
            ...req.body,
        },(error,cos)=>{
            if (!error){
                res.redirect('/adim/dashboard/result/input')
            }
        },
    )
    }
    

}
 






