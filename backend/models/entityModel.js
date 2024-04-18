import mongoose from "mongoose";

const entitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
})

const Entity = mongoose.model('Entity', entitySchema);

export default Entity