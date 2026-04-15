import Company from "../models/company.mode.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
// register a new comapny
export const registerCompanyController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    throw new ApiError(400, "All fields including image are required");
  }
  const existingCompany = await Company.findOne({ email });
  if (existingCompany) {
    throw new ApiError(409, "Company with this email already exists");
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

  const createdCompany = await Company.findById(company._id).select(
    "-password",
  );
  return res
    .status(201)
    .json(
      new ApiResponse(201, createdCompany, "Company registered successfully"),
    );
});

// company login
export const companyLoginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const company = await Company.findOne({ email }).select("+password");
  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  const isPasswordValid = await company.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const accessToken = jwt.sign(
    {
      _id: company._id,
      email: company.email,
      role: company.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d",
    },
  );

  // ✅ Fetch company without password for response
  const loggedInCompany = await Company.findById(company._id);

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          company: loggedInCompany,
          accessToken,
        },
        "Login successful",
      ),
    );
});
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
