import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Company from "../models/company.mode.js";

export const verifyCompany = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.headers?.authorization?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized - no token provided");
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const company = await Company.findById(decoded._id);
  if (!company) {
    throw new ApiError(401, "Unauthorized - company not found");
  }

  req.company = company;
  next();
});
