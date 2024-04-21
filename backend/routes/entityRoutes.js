import express from 'express'
import { deleteEntityController, newEntityController } from '../controllers/entityController.js';
import { isLoggedIn, isSuperAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/new', isLoggedIn, isSuperAdmin, newEntityController);
router.delete('/delete/:id', isLoggedIn, isSuperAdmin, deleteEntityController);

export default router