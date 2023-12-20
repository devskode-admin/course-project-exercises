import express from 'express';
import technologyRouter from './technology';

const router = express.Router();

router.use('/technologies', technologyRouter);

export default router;
