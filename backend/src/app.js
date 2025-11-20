import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => res.send("Task Manager API Running"));

app.use(errorHandler);

export default app;
