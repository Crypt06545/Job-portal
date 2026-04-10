import mongoose from "mongoose";

const { Schema, model } = mongoose;

const companySchema = new Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      default: () => crypto.randomUUID(),
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/, // email validation
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "COMPANY",
    },
    industry: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    socialLinks: {
      type: Schema.Types.Mixed,
    },
    websiteUrl: {
      type: String,
    },
    hrEmail: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
    },
    infoEmail: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
    },
    logoUrl: {
      type: String,
    },
    employeeCount: {
      type: String,
    },
    foundedYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Company = model("Company", companySchema);
export default Company;
