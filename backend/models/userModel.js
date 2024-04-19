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
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    hasVoted: {
        type: Boolean,
        ref: 'Entity',
        default: false
    },
})

const User = mongoose.model('User', userSchema);

export default User