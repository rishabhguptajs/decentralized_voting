import express from 'express'
import { votePostController } from '../controllers/votingController.js';

const router = express.Router()

router.post('/vote', votePostController);

export default router