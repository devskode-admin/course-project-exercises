/* eslint-disable import/no-unresolved */
import express from 'express';
import professional from '../Controllers/professional';

const router = express.Router();

// Create a new professional
router.post('/', professional.create);

// Retrieve all buildings
router.get('/', professional.list);

// Retrieve a single professional with id
router.get('/:id', professional.findOne);

// Update a professional with id
router.put('/:id', professional.update);

// Delete a professional with id
router.delete('/:id', professional.deleteItem);

export default router;
