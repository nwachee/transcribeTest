import { Router } from 'express';
import videoRoute from './video.route.js'
const router = Router();

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server ok' });
});


router.use('/upload', videoRoute)

export default router;
