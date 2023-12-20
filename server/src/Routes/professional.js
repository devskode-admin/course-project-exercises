/* eslint-disable import/no-unresolved */
import express from 'express';
import professional from '../Controllers/professional';
import validations from '../Validations/professional'

const router = express.Router();

// Retrieve all buildings
router.get('/', professional.list);

// Retrieve a single professional with id
router.get('/:id', professional.findOne);

// Create a new professional
router.post('/', validations.validateCreation, professional.create);

// Update a professional with id
router.put('/:id', validations.validateUpdate, professional.update);

// Delete a professional with id
router.delete('/:id', professional.deleteItem);

export default router;
