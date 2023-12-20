/* eslint-disable eol-last */
import express from 'express';
import technology from '../Controllers/technology';

const router = express.Router();

router.get('/', technology.list);

router.get('/:id', technology.findOne);

router.post('/', technology.create);

router.put('/:id', technology.update);

router.delete('/:id', technology.deleteItem);

export default router;
