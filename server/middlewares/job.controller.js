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

export const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Job ID is required");
  }

  const job = await Job.findById(id).populate({
    path: "companyId",
    select: "-password",
  });
  if (!job) {
    throw new ApiError(404, "Job not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, job, "Job fetched successfully"));
});
