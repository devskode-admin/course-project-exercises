import express from 'express';
import professionalRouter from './professional';
import technologyRouter from './technology';

const router = express.Router();

router.use('/professionals', professionalRouter);
router.use('/technologies', technologyRouter);

export default router;
