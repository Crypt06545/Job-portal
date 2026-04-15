import { Router } from "express";
import { getJobs } from "../middlewares/job.controller.js";
const jobRouter = Router();

jobRouter.get('/',getJobs);
export default jobRouter;
