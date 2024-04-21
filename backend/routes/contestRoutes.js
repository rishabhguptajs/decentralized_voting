import express from 'express'
import { getContestsController, newContestController } from '../controllers/contestController.js'
import { isLoggedIn, isSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/new', isLoggedIn, isSuperAdmin, newContestController);
router.get('/', isLoggedIn, getContestsController);

export default router