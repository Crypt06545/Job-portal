import Company from "../models/company.mode.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// register a new comapny
export const registerCompanyController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    throw new ApiError(400, "All fields including image are required");
  }
  const uploadResult = await uploadOnCloudinary(
    imageFile.buffer,
    imageFile.originalname,
  );
  const company = await Company.create({
    name,
    email,
    password,
    logoUrl: uploadResult.secure_url,
  });

  const createdCompany = await Company.findById(company._id).select("-password");
  return res
   .status(201)
   .json(new ApiResponse(201, createdCompany, "Company registered successfully"));
});

// company login
export const companyLoginController = asyncHandler(async (req, res) => {});

// get company data
export const getCompanyDataController = asyncHandler(async (req, res) => {});

// post a new job
export const postJobController = asyncHandler(async (req, res) => {});

// get company job applicants
export const getCompanyJobApplicantsController = asyncHandler(
  async (req, res) => {},
);

// get company posted job
export const getCompanyPostedJobsController = asyncHandler(
  async (req, res) => {},
);

// chnage job Applicants status
export const chnageJobApplicantsStatusController = asyncHandler(
  async (req, res) => {},
);

// chnage job visiblity
export const changeVisiblityController = asyncHandler(async (req, res) => {});
