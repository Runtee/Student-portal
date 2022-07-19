const path = require('path')
const hostelInvoice = require('../models/hostel.js')
const Hostel = require('../models/hostelAdmin');

module.exports = async (req, res) => {
  const { hostel, session } = req.body;
  const invoice = await hostelInvoice.find({
    hostel: hostel, session, session,
    userid: req.session.userId
  });

  if (invoice) {
    return res.render('hostel_invoice', {
      hostel_Invoice:invoice
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
    },(er,inv)=>{
      if (inv) return res.redirect('/dashboard/hostel/invoice')
      else throw er
    })
  }

}



