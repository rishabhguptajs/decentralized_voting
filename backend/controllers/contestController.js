import Contest from '../models/contestModel.js'

export const newContestController = async(req, res) => {
    try {
        const { title, description, start_date, duration, entity_list_id } = req.body;

        if(!title || !description || !start_date || !duration || !entity_list_id){
            return res.status(400).json({
                message: "Please provide all the required fields",
                success: false
            })
        }

        const contest = new Contest({
            title,
            description,
            start_date,
            duration,
            entity_list_id
        })

        await contest.save()

        res.status(201).json({
            message: "Contest created successfully",
            success: true,
            data: contest
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in creating contest. Please try again.",
            error: error.message,
            success: false
        })
    }
}

export const getContestsController = async(req, res) => {
    try {
        const contests = await Contest.find()
        res.status(200).json({
            message: "Contests fetched successfully",
            success: true,
            data: contests
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in fetching contests. Please try again.",
            error: error.message,
            success: false
        })
    }
}