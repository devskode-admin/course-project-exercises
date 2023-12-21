import Joi from "joi";

const validateCreation = (req, res, next) => {
  const professionalCreate = Joi.object({
    first_name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[A-Za-z\s]+$/)
      .required()
      .messages({
        "string.base": "first_name must be a string",
        "string.empty": "first_name is required",
        "string.min": "first_name must have at least 3 chars",
        "string.max": "first_name cannot be more than 20 chars",
        "string.pattern.base": "first_name must contain only letters",
        "any.required": "first_name is required",
      }),
    last_name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[A-Za-z\s]+$/)
      .required()
      .messages({
        "string.base": "last_name must be a string",
        "string.empty": "last_name is required",
        "string.min": "last_name must have at least 3 chars",
        "string.max": "last_name cannot be more than 20 chars",
        "string.pattern.base": "last_name must contain only letters",
        "any.required": "last_name is required",
      }),
    email: Joi.string()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required()
      .messages({
        "string.base": "Email is not in the correct format",
        "string.empty": "Email is required",
        "string.pattern.base": "Email is not in the correct format",
        "any.required": "Email is required",
      }),
    password: Joi.string()
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .required()
      .messages({
        "string.base": "Password must be a string",
        "string.empty": "Password is required",
        "string.pattern.base":
          "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
        "any.required": "Password is required",
      }),
    role: Joi.string()
      .valid("Director", "Manager", "Developer", "QA")
      .required()
      .messages({
        "any.only":
          "Role must be one of this: Director, Manager, Developer, QA",
        "any.required": "Role is required",
      }),
    module: Joi.string()
      .valid(
        "Management",
        "Human Resources",
        "Course",
        "Internship",
        "Interview",
        "Onboarding",
        "Tracking"
      )
      .required()
      .messages({
        "any.only":
          "Module must be one of this: Management, Human resources, Course, Internship, Interview, Onboarding, Tracking",
        "any.required": "Module is required",
      }),
  });

  const validation = professionalCreate.validate(req.body);

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
  const professionalUpdate = Joi.object({
    first_name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[A-Za-z\s]+$/)
      .messages({
        "string.base": "first_name must be a string",
        "string.empty": "first_name is required",
        "string.min": "first_name must have at least 3 chars",
        "string.max": "first_name cannot be more than 20 chars",
        "string.pattern.base": "first_name must contain only letters",
        "any.required": "first_name is required",
      }),
    last_name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[A-Za-z\s]+$/)
      .messages({
        "string.base": "last_name must be a string",
        "string.empty": "last_name is required",
        "string.min": "last_name must have at least 3 chars",
        "string.max": "last_name cannot be more than 20 chars",
        "string.pattern.base": "last_name must contain only letters",
        "any.required": "last_name is required",
      }),
    email: Joi.string()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .messages({
        "string.base": "Email is not in the correct format",
        "string.empty": "Email is required",
        "string.pattern.base": "Email is not in the correct format",
        "any.required": "Email is required",
      }),
    password: Joi.string()
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .messages({
        "string.base": "Password must be a string",
        "string.empty": "Password is required",
        "string.pattern.base":
          "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
        "any.required": "Password is required",
      }),
    role: Joi.string()
      .valid("Director", "Manager", "Developer", "QA")
      .messages({
        "any.only":
          "Role must be one of this: Director, Manager, Developer, QA",
        "any.required": "Role is required",
      }),
    module: Joi.string()
      .valid(
        "Management",
        "Human Resources",
        "Course",
        "Internship",
        "Interview",
        "Onboarding",
        "Tracking"
      )
      .messages({
        "any.only":
          "Module must be one of this: Management, Human resources, Course, Internship, Interview, Onboarding, Tracking",
        "any.required": "Module is required",
      }),
  });

  const validation = professionalUpdate.validate(req.body);

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
