import mongoose from "mongoose";
import slugify from "slugify";
const { Schema, model } = mongoose;
import bcrypt from "bcryptjs";
import crypto from "crypto";

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
      unique: true,
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
      select: false,
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

// ✅ Single merged async pre-save hook — no next() parameter needed
companySchema.pre("save", async function () {
  // ✅ Slug generation with duplicate handling
  if (this.isModified("name")) {
    const baseSlug = slugify(this.name, {
      lower: true,
      strict: true,
      trim: true,
    });

    let slug = baseSlug;
    let count = 1;

    // Keep checking until a unique slug is found
    while (true) {
      const existing = await mongoose.model("Company").findOne({ slug });

      // If no company found with this slug, or it's the same document, use it
      if (!existing || existing._id.toString() === this._id.toString()) {
        break;
      }

      // Append counter and try again: microsoft-corporation-1, -2, etc.
      slug = `${baseSlug}-${count}`;
      count++;
    }

    this.slug = slug;
  }

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
// ✅ Instance method to compare passwords
companySchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Company = model("Company", companySchema);
export default Company;
