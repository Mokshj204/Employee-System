const mongoose = require('mongoose')

const attendence = new mongoose.Schema({
    empId : {
        type : String,
        required : true 
    },
    absentDate : {
        type : Date,
        required : true 
    },
    totalDaysAbsent : {
        type : Number,
        default : 0
    },
    reason : {
        type : String,
        required : true
    }
})

const Attendence = mongoose.model('Attendence',attendence)

module.exports = Attendence;