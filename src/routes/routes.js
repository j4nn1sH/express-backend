import express from 'express';

// Import all routes
import huntRoutes from './hunt.routes';

const router = express.Router();

router.use('/hunt', huntRoutes);

module.exports = router;
