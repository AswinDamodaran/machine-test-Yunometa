import { Task } from "../models/Task.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validation/taskValidation.js";

// CREATE
export const createTask = async (req, res) => {
  const { error, value } = createTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const task = await Task.create(value);
  res.status(201).json(task);
};

// GET ALL
export const getAllTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

// GET ONE
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

// UPDATE
export const updateTask = async (req, res) => {
  const { error, value } = updateTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const task = await Task.findByIdAndUpdate(req.params.id, value, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

// DELETE
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.status(204).end();
};
