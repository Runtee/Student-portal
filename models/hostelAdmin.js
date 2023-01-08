const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HostelSchema = new Schema({
    session: {
        type: String,
        required: [true, 'Please provide session'],
    },

    hostel: {
        type: String,
        required: [true, 'Please provide hostel']
    },
    typeOH:{
        type: String,
        required: [true, 'Please provide hostel']
    },
    rooms: {
        type: Number,
        required: [true, 'Please provide room']
    },
    roomLeft:{
        type: Number,
        required: [true, 'Please provide room']
    },
    fees:{
        type: Number,
    }
})

const Hostels = mongoose.model('hostels', HostelSchema);
module.exports = Hostels

