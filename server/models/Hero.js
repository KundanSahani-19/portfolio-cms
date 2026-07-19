const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      required: true,
    },

    github: String,

    linkedin: String,

    instagram: String,

    resume: String,

    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hero", heroSchema);