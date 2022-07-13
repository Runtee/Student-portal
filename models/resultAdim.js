// const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true });

const ResultSchema = new Schema({
    courseCode:String,
    student:
        [{
            regNo: {
                type: String,
                // required: false
            },
            courseCode: {
                type: String,
                // required: [false, 'Please provide courseCode']
            },
            score: {
                type: String,
                // required: [false, 'Please provide score']
            }
            ,
            grade: {
                type: String,
                // required: [false, 'Please provide grade']
            },
            level: {
                type: String,
                // required: [false, 'Please provide level']
            },
        }    
            
        ]
        ,session: {
            type: String,
            // required: [false, 'Please provide session'],
        },
        semester: {
            type: String,
            // required: [false, 'Please provide semester']
        }
        
    
})


const resultAdimStore = mongoose.model('resultStoreAdim', ResultSchema);
module.exports = resultAdimStore

