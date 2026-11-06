import express from 'express'; 
const router = express.Router();
import classificationController from '../controllers/classification.controller.js';

router.post('/classify',classificationController.classify)

export default router;