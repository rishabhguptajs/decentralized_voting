import mongoose from "mongoose";

const voteSchema = mongoose.Schema({
    entity_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Entity'
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    vote_option:{
        type: Number,
        required: true
    },
    voted_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    transactionHash:{
        type: String,
        required: true
    }
})

const Vote = mongoose.model('Vote', voteSchema);

export default Vote