import express from 'express';

import huntController from '../controllers/hunt.controllers';

const router = express.Router();

router.post('', huntController.create);
router.get('', huntController.read);
router.get('/:id/standing', huntController.getStanding);

module.exports = router;
