import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true,
        unique: true,
    },
    voterID: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    hasVoted: {
        type: String,
        ref: 'Entity',
    },
})

const User = mongoose.model('User', userSchema);

export default User