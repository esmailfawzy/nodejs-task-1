import express from "express";
import studentsController from "../controllers/students.js";

const studentsRouter = express.Router();

studentsRouter.get("/", studentsController);

export default studentsRouter;
