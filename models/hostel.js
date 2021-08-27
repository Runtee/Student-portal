
// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const HostelInvoiceSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    }
})

const hostelInvoice = mongoose.model('hostelInvoice', HostelInvoiceSchema);
module.exports = hostelInvoice

