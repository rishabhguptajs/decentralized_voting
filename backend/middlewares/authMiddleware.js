import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const isLoggedIn = async(req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decoded
        next();
    } catch (error) {
        res.status(401).json({
            message: "User not authenticated",
            success: false
        })
    }
}

export const isSuperAdmin = async(req, res, next) => {
    try {
        const user = await User.findOne({ aadhar: req.user.aadhar });
        if(user.isSuperAdmin){
            next();
        } else {
            res.status(401).json({ 
                message: "User not authorized to access this route",
                success: false
            })
        }
    } catch (error) {
        res.status(401).json({ 
            message: "Error while checking user authorization",
            success: false
        })
    }
}