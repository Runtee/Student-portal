const finfi = {
    student: [
        {
            regNo: {},
            score: {},
            grade: {},
            level: {},
        },
    ],
    department: {},
    courseCode: {},
    session: {},
    semester: {},
};

var { parse } = require("fast-csv");
var Author = require("./author");
exports.post = function (req, res) {
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
        renameHeaders: true, maxRows: 2
    })
        .on("error", (error) => console.error(error))
        .on("data", (data) => {
            info.push(data);
        })
        .on("end", () => {
        });

    stream2.write(authorFile);
    stream2.end();
    
    var result = {
        ...info[0],
        student:students

    }

    // (objA,objB)=>{
    //     let keyA , keyB
    //     keyA= Object.keys(objA)
        
    //     keyB = Object.keys(objB)
    //     if (keyA.length === keyB.length){
    //         for (let index = 0; index < keyA.length; index++) {
    //             if(keyA[index] == keyB[index]) {
    //                 if (objA.keyA[index] != objA.keyA[index] ){
    //                     return 'objects are not the same'
    //                 }
    //             }
                
    //         }
    //     }
    //     return 'object are the same'
    // }
};
