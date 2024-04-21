import mongoose from "mongoose";

const contestSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    start_date:{
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    entity_list_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Entity'
        }
    ],
    expired: {
        type: Boolean,
        default: false
    },
})

const Contest = mongoose.model('Contest', contestSchema);

export default Contest