import Joi from 'joi';

const validateCreation = (req, res, next) => {
  const technologyCreate = Joi.object({
    name: Joi.string()
      .min(3)
      .max(20)
      .required()
      .messages({
        'string.base': 'Name must contain only letters',
        'string.empty': 'Name is required',
        'string.min': 'Name must have at least 3 chars',
        'string.max': 'Name cannot be more than 20 chars',
        'any.required': 'Name is required',
      }),
    development_side: Joi.string()
      .valid('Frontend', 'Backend', 'Fullstack')
      .required()
      .messages({
        'any.only':
          'Development side must be one of this: Frontend, Backend, Fullstack',
        'any.required': 'Development is required',
      }),
  });

  const validation = technologyCreate.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      error: true,
      data: [],
      message: validation.error.message,
    });
  }

  return next();
};

const validateUpdate = (req, res, next) => {
  const technologyUpdate = Joi.object({
    name: Joi.string().min(3).max(10).messages({
      'string.base': 'Name must contain only letters',
      'string.min': 'Name must have at least 3 chars',
      'string.max': 'Name cannot be more than 20 chars',
    }),
    development_side: Joi.string().valid('Frontend', 'Backend', 'Fullstack').messages({
      'any.only': 'Development side must be one of this: Frontend, Backend, Fullstack',
    }),
  });

  const validation = technologyUpdate.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      error: true,
      data: [],
      message: validation.error.message,
    });
  }

  return next();
};

export default {
  validateCreation,
  validateUpdate,
};
