import express from 'express'
import { newContestController } from '../controllers/contestController.js'
import { isSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/new', isSuperAdmin, newContestController);

export default router