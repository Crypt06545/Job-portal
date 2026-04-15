import { Router } from "express";
import { getJobById, getJobs } from "../middlewares/job.controller.js";
const jobRouter = Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
export default jobRouter;
