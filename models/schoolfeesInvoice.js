// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const SchoolInvoiceSchema = new Schema({
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
        required: [true, 'Please provide level']
    }
})

const feesInvoice = mongoose.model('feesInvoice', SchoolInvoiceSchema);
module.exports = feesInvoice

