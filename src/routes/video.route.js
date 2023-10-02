import { Router } from "express";
import {createChunk, deleteChunk, findChunk, renderChunk} from '../controllers/video.controller.js'
import { upload } from "../utils/multer.util.js";

const router = Router()

router.post('/', upload.single('video'), createChunk)
router.get('/find/:tag', findChunk)
router.get('/render-chunk',renderChunk)
router.delete('/:id',deleteChunk)

export default router