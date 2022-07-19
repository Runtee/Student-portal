const Hostel = require('../models/hostelAdmin');
const { parse } = require("fast-csv");
module.exports= {
    HostelAdmin : (req,res)=>{
        res.render('hostel admin');
    },
    HostelAdminPost: (req,res)=>{
        const {rooms,
    } = req.body;
    roomLeft = rooms
    Hostel.create({...req.body, 'roomLeft':roomLeft},(er,hostel)=>{
      if (hostel){
        redirect('admin/dashboard/hostel')
      }  
      else{
        throw err
      }
    })
},
    hostelCsvUpload: (req, res) =>{
        if (!req.files) return res.status(400).send("No files were uploaded.");
        var hostelFile = req.files.file.data.toString();
        var hostels = [];
        const stream = parse({
            headers: true,
            ignoreEmpty: true
        }).transform(data =>({
            roomLeft: data.rooms
        }))
            .on("error", (error) => console.error(error))
            .on("data", (data) => {
                hostels.push(data);
            })
            .on("end", () => {
                Hostel.create(hostels,(er,hostel)=>{
                    if (hostel) redirect('admin/dashboard/hostel');
                      
                    else throw err
                    
                  })
            });
        stream.write(hostelFile);
        stream.end();
    
}
}