import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

export const userRegisterController = async(req, res) => {
    try {
        const { name, aadhar, voterID, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            aadhar,
            voterID,
            password: hashedPassword
        });
        res.status(201).json({
            message: "User registered successfully",
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while registering user",
            error: error.message,
            success: false
        })
    }
}

export const userLoginController = async(req, res) => {
    try {
        const { aadhar, password } = req.body;
        const token = jwt.sign({ aadhar }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        if(!aadhar || !password) {
            return res.status(400).json({
                message: "Please enter all fields",
                success: false
            })
        }

        const user = await User.findOne({ aadhar });

        if(!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }

        const isMatch = await comparePassword(password, user.password);

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
                success: false
            })
        }

        res.status(200).json({
            message: "User logged in successfully",
            success: true,
            token,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while logging in user",
            error: error.message,
            success: false
        })
    }
}