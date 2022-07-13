// const mongodb = require('mongodb');
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const StudentInfoSchema = new Schema({
    login:{
        username: {
            type: String,
            required: [true,'Please provide username'],
            unique: [true,'Username already exists']
            },
            password: {
            type: String,
            required: [true,'Please provide password']
            }
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
    },
    caddress:{
        type: String,

    },
    paddress:{
        type: String,

    },
    religion:{
        type: String,

    },
    regNo:{
        type: String,

    },
    bgroup:{
        type: String,

    },
    gtype:{
        type: String,
   
    },
    saddress:{
        type:String
    },
    smobile:{
        type:String
    },
    nfullname:{
        type:String
    },
    naddress:{
        type:String
    },
    nmobile:{
        type:String
    },
    nemail:{
        type:String
    },
    stype:{
        type:String
    },
    mode:{
        type:String
    },
    ms:{
        type:String
    },
    ey:{
        type:String
    },
    yg:{
        type:String
    },
    ys:{
        type:String
    },
    yg:{
        type:String
    },
    sick:{
        type:Array
    }
});

StudentInfoSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.login.password, 10, (error, hash) => {
    user.login.password = hash
    next()
    })

})

StudentInfoSchema.plugin(uniqueValidator);




const StduentInfo = mongoose.model('StduentInfo', StudentInfoSchema);
module.exports = StduentInfo




