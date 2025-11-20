import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  description: Joi.string().allow("").optional(),
  status: Joi.string().valid("pending", "in-progress", "completed").optional(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().trim().optional(),
  description: Joi.string().allow("").optional(),
  status: Joi.string().valid("pending", "in-progress", "completed").optional(),
}).min(1);
