import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { validateObjectId } from "../middleware/validateObjectId.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", validateObjectId, getTaskById);
router.put("/:id", validateObjectId, updateTask);
router.delete("/:id", validateObjectId, deleteTask);

export default router;
