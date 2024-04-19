import jwt from 'jsonwebtoken';

export const isLoggedIn = async(req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decoded
        console.log(req.user)
        next();
    } catch (error) {
        res.status(401).json({
            message: "User not authenticated",
            success: false
        })
    }
}