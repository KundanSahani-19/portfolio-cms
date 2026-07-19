const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    startDate: {
      type: String,
      required: true,
    },

    endDate: {
      type: String,
      default: "Present",
    },

    description: {
      type: String,
      default: "",
    },

    technologies: {
      type: [String],
      default: [],
    },

    companyUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Experience",
  experienceSchema
);