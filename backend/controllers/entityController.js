import Entity from "../models/entityModel.js";
import Contest from "../models/contestModel.js";

export const newEntityController = async(req, res) => {
    try {
        const { name, description } = req.body;
        if(!name || !description){
            return res.status(400).json({
                message: "Please provide all the required fields",
                success: false
            })
        }

        const entity = new Entity({
            name,
            description
        })

        await entity.save()

        res.status(201).json({
            message: "Entity created successfully",
            success: true,
            data: entity
        })
    } catch (error) {
        res.status(401).json({
            message: "Error in creating entity. Please try again.",
            error: error.message,
            success: false
        })
    }
}

export const deleteEntityController = async(req, res) => {
    try {
        const entity = await Entity.findById(req.params.id);
        if(!entity){
            return res.status(404).json({
                message: "Entity not found",
                success: false
            })
        }

        await entity.deleteOne()

        const contests = await Contest.find({ entity_list_id: req.params.id });

        // delete the entity from all contests
        contests.forEach(async(contest) => {
            contest.entity_list_id = contest.entity_list_id.filter(entity => entity != req.params.id)
            await contest.save()
        })


        res.status(200).json({
            message: "Entity deleted successfully",
            success: true
        })
    } catch (error) {
        res.status(401).json({
            message: "Error in deleting entity. Please try again.",
            error: error.message,
            success: false
        })
    }
}