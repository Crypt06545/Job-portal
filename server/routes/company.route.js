import { Router } from "express";
import {
  changeVisiblityController,
  chnageJobApplicantsStatusController,
  companyLoginController,
  getCompanyDataController,
  getCompanyJobApplicantsController,
  getCompanyPostedJobsController,
  postJobController,
  registerCompanyController,
} from "../controllers/company.controller.js";
import { upload } from "../middlewares/multerMiddleware.js";
import { verifyCompany } from "../middlewares/companyAuth.middleware.js";

const companyRouter = Router();

companyRouter.post("/register", upload.single("image"),registerCompanyController);
companyRouter.post("/login", companyLoginController);
companyRouter.get("/company", getCompanyDataController);
companyRouter.post("/post-job",verifyCompany, postJobController);
companyRouter.get("/applicants", getCompanyJobApplicantsController);
companyRouter.get("/list-jobs", getCompanyPostedJobsController);
companyRouter.post("/chnage-status", chnageJobApplicantsStatusController);
companyRouter.post("/chnage-visiblity", changeVisiblityController);
export default companyRouter;
// upload.single("image")
