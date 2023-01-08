const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HostelInvoiceSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StduentInfo',
        required: true
    },
    session: {
        type: String,
        required: [true, 'Please provide session'],
    },
    level: {
        type: String,
        required: [true, 'Please provide level'],
    },
    hostel: {
        type: String,
        required: [true, 'Please provide hostel']
    },
    room: {
        type: String,
        required: [true, 'Please provide room']
    },
    fees:{
        type: Number,
        required: [true, 'Please provide fees']
       
    }
})

const hostelInvoice = mongoose.model('hostelInvoice', HostelInvoiceSchema);
module.exports = hostelInvoice

