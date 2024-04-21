import express from 'express'
import { newEntityController } from '../controllers/entityController.js';
import { isSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/new', isSuperAdmin, newEntityController);

export default router