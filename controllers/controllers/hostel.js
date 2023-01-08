const Hostel = require('../models/hostelAdmin');
const { parse } = require("fast-csv");
module.exports = {
    HostelAdmin: (req, res) => {
        res.render('hostel admin');
    },
    HostelAdminPost: (req, res) => {
        const { rooms,
        } = req.body;
        roomLeft = rooms
        Hostel.create({ ...req.body, 'roomLeft': roomLeft }, (er, hostel) => {
            if (hostel) {
                redirect('admin/dashboard/hostel')
            }
            else {
                throw err
            }
        })
    },
    hostelCsvUpload: (req, res) => {
        if (!req.files) return res.status(400).send("No files were uploaded.");
        var hostelFile = req.files.file.data.toString();
        var hostels = [];
        const stream = parse({
            headers: true,
            ignoreEmpty: true
        }).transform(data => ({
            roomLeft: data.rooms
        }))
            .on("error", (error) => console.error(error))
            .on("data", (data) => {
                hostels.push(data);
            })
            .on("end", () => {
                Hostel.create(hostels, (er, hostel) => {
                    if (hostel) redirect('admin/dashboard/hostel');

                    else throw err

                })
            });
        stream.write(hostelFile);
        stream.end();

    }
}
exports.getHostelView = (req, res) => {
    res.render('Hostel')
}
exports.getHostelInvoiceView = async (req, res) => {
    const studentInfo = await StudentInfo.find({ userid: req.session.userId }).populate('userid',);
    const hostel_Invoice = await hostelInvoice.find({ userid: req.session.userId });
    res.render('hostel_invoice', {
        studentInfo,
        hostel_Invoice

    })
}
exports.getHostel = async (req, res) => {
    const { hostel, session } = req.body;
    const invoice = await hostelInvoice.find({
        hostel: hostel, session, session,
        userid: req.session.userId
    });

    if (invoice) {
        return res.render('hostel_invoice', {
            hostel_Invoice: invoice
        })
    };
    const hostels = Hostel.findOne({ hostel: hostel, session: session });
    if (err) throw err;
    if (hostels.roomLeft >= 0) {
        hostels.roomLeft--
        hostels.update({ roomLeft: hostels.roomleft });
        let roomNumber = hostels.rooms - hostels.roomLeft;
        hostelInvoice.create({
            ...req.body,
            room: roomNumber,
            fees: hostels.fees,
            userid: req.session.userId,
        }, (er, inv) => {
            if (inv) return res.redirect('/dashboard/hostel/invoice')
            else throw er
        })
    }

}