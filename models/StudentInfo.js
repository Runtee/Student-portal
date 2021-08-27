// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const StudentInfoSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique:true,
        required: true
        },
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
    },
    middleName: {
        type: String,
        required: [true, 'Please provide middle name']
    },
    surName: {
        type: String,
        required: [true, 'Please provide surname']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        
    },
    faculty: {
        type: String,
        required: [true, 'Please provide faculty'],
    },
    department: {
        type: String,
        required: [true, 'Please provide department'],
    },
    DOB: {
        type: String,
        required: [true, 'Please provide date of birth'],
    },
    sex: {
        type: String,
        required: [true, 'Please provide sex'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide phone'],
    }, 
    parent: {
        type: String,
        required: [true, 'Please provide Parent/Guardian name'],
    },
    state: {
        type: String,
        required: [true, 'Please provide State of origin'],
    },
    LGA: {
        type: String,
        required: [true, 'Please provide Local Government of Origin'],
    },

    image: {
        type: String,
        required: [true, 'Please provide your passport'],
    }
});




const StduentInfo = mongoose.model('StduentInfo', StudentInfoSchema);
module.exports = StduentInfo




