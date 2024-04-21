import jwt from 'jsonwebtoken';

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
        if(req.user.isSuperAdmin){
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