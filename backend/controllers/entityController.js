import Entity from "../models/entityModel.js";

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