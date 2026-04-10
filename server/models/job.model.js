import mongoose from "mongoose";

const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      default: () => crypto.randomUUID(),
    },
    companyId: {
      type: Schema.Types.UUID,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Freelance", "Internship"],
      required: true,
    },
    workMode: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    salaryPeriod: {
      type: String,
      enum: ["Hourly", "Daily", "Weekly", "Monthly", "Yearly"],
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Engineering",
        "Design",
        "Product",
        "Marketing",
        "Sales",
        "HR",
        "Finance",
        "Other",
      ],
    },
    experienceLevel: {
      type: String,
      enum: ["Entry", "Mid", "Senior", "Expert", "Lead"],
    },
    requirements: {
      type: String,
    },
    benefits: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    vacancies: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: ["Active", "Closed", "Archived"],
      default: "Active",
    },
    skills: {
      type: Schema.Types.Mixed,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Job = model("Job", jobSchema);
export default Job;
