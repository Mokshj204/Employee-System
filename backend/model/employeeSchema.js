const { ObjectId, Int32 } = require('mongodb');
const mongoose=require('mongoose');

const empSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    empId : {
        type : String,
        unique : true,
        required : true
    },
    empFirstName : {
        type: String,
        required : true
    },
    empLastName : {
        type: String,
        required : true
    },
    empAddress : {
        type: String,
        required : true
    },
    empDept : {
        type : String,
        require : true 
    },
    empSalary : {
        type: Number,
        required : true
    },
    empDOB : {
        type : Date,
        require : true,
        validate: {
            validator: function(value) {
                // Check if the time portion of the date is midnight (00:00:00)
                return value.getHours() === 0 && value.getMinutes() === 0 && value.getSeconds() === 0 && value.getMilliseconds() === 0;
            },
            message: 'Date of birth must not include time'
        }
    }
})

const EmpSchema =  mongoose.model('Employee',  empSchema);

module.exports = EmpSchema;