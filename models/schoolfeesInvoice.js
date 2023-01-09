const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SchoolInvoiceSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StduentInfo',
        required: true
        },
        session: {
        type: String,
        required: [true, 'Please provide session'],
    },
    invoiceNumer: {
        type: String,
        required: [true, 'Please provide session'],
    },
    level: {
        type: String,
        required: [true, 'Please provide level']
    }
})

const feesInvoice = mongoose.model('feesInvoice', SchoolInvoiceSchema);
module.exports = feesInvoice

