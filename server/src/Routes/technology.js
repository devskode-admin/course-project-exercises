/* eslint-disable eol-last */
import express from 'express';
import technology from '../Controllers/technology';
import validations from '../Validations/technology';

const router = express.Router();

router.get('/', technology.list);

router.get('/:id', technology.findOne);

router.post('/', validations.validateCreation, technology.create);

router.put('/:id', validations.validateUpdate, technology.update);

router.delete('/:id', technology.deleteItem);

export default router;
