import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      default: () => crypto.randomUUID(),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "USER",
    },
    title: {
      type: String,
    },
    bio: {
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
    zipCode: {
      type: String,
    },
    location: {
      type: String,
    },
    phone: {
      type: String,
    },
    portfolioUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    resumeUrl: {
      type: String,
    },
    resumeOriginalName: {
      type: String,
    },
    resumeSize: {
      type: String,
    },
    resumeUploadDate: {
      type: Date,
    },
    profilePictureUrl: {
      type: String,
    },
    experienceLevel: {
      type: String,
      enum: ["Entry", "Mid", "Senior", "Expert", "Lead"],
    },
    skills: {
      type: Schema.Types.Mixed,
      default: [],
    },
    experience: {
      type: Schema.Types.Mixed,
      default: [],
    },
    education: {
      type: Schema.Types.Mixed,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);
export default User;
