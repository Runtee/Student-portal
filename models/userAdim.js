const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator');

const AdimSchema = new Schema({
    username: {
    type: String,
    required: [true,'Please provide username'],
    unique: [true,'Username already exists']
    },
    password: {
    type: String,
    required: [true,'Please provide password']
    }
    });
AdimSchema.pre('save', function(next){
    const adim = this
    bcrypt.hash(adim.password, 10, (error, hash) => {
    adim.password = hash
    next()
    })

})

AdimSchema.plugin(uniqueValidator);

const Adim = mongoose.model('Adim',AdimSchema);
module.exports = Adim