import express from 'express';
import * as commentController from '../controllers/commentController.js';

const router = express.Router();

router.route('/yorum').post(commentController.createComment)
.get(commentController.getAllComment)


export default router;