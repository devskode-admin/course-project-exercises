/* eslint-disable import/no-unresolved */
import express from 'express';
import professional from '../Controllers/professional';

const router = express.Router();

router.get('/', professional.list);

router.get('/:id', professional.findOne);

router.post('/', professional.create);

router.put('/:id', professional.update);

router.delete('/:id', professional.deleteItem);

export default router;
