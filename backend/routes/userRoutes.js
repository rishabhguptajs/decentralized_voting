import express from 'express'
import { userGetProfileController, userLoginController, userRegisterController } from '../controllers/userController.js';
import { isLoggedIn } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/register', userRegisterController);
router.post('/login', userLoginController);
router.get('/profile', isLoggedIn, userGetProfileController);

export default router