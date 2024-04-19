import Vote from "../models/voteModel.js";

export const votePostController = async(req, res) => {
    try {
        const { entity_id, user_id, vote_option } = req.body;

        if(!entity_id || !user_id || !vote_option){
            return res.status(400).json({
                message: "Please provide all the required fields",
                success: false
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error in voting. Please try again.",
            error: error.message,
            success: false
        })
    }
}