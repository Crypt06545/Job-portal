import Job from "../models/job.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ status: "Active" }).populate({
    path: "companyId",
    select: "-password",
  });

  return res
    .status(200)
    .json(new ApiResponse(200, jobs, "Jobs fetched successfully"));
});
