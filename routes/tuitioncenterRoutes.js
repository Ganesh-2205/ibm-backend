import express from 'express';
import { createTuitionCenterProfile, deleteTuitionCenterProfile, getTuitionCenterProfile, updateTuitionCenterProfile } from '../controllers/tuitionCenterController.js';
import {singleUpload} from "../middleware/multer.js"

const router = express.Router();

// Tuition Center routes
router.post('/create',singleUpload, createTuitionCenterProfile);
router.get('/get-profile/:id',singleUpload, getTuitionCenterProfile);
router.put('/update/:id',singleUpload, updateTuitionCenterProfile);
router.delete('/delete/:id', deleteTuitionCenterProfile);

export default router;
