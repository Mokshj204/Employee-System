const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    employeeId: {
        type: ObjectId,
        ref: "Employee"
    },
    adminId: {
        type: ObjectId,
        ref: "Administrator"
    },
    role: {
        type: Number,
        default: 1 // 1 for employee and 0 for admin
    },
    salt: String
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('hashed_password')) return next();

    // Generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // Hash the password using the generated salt
        bcrypt.hash(user.hashed_password, salt, function (err, hash) {
            if (err) return next(err);
            user.hashed_password = hash;
            user.salt = salt;
            next();
        });
    });
});

// Method to compare passwords
userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.hashed_password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
