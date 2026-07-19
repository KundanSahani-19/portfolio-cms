const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    // Hero Section
    greeting: {
      type: String,
      default: "👋 Hello, I'm",
    },

    name: {
      type: String,
      default: "Kundan Sahani",
    },

    roles: {
      type: [String],
      default: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Java Developer",
      ],
    },

    tagline: {
      type: String,
      default:
        "Building scalable web applications with React, Node.js and Spring Boot.",
    },

    heroImage: {
      type: String,
      default: "",
    },

    availableText: {
      type: String,
      default: "Available for Internship & Full Time",
    },

    // Buttons
    hireButton: {
      type: String,
      default: "Hire Me",
    },

    resumeButton: {
      type: String,
      default: "Download Resume",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    // Social Links
    social: {
      github: String,
      linkedin: String,
      instagram: String,
      twitter: String,
      email: String,
      website: String,
    },

    // Floating Skills
    floatingSkills: {
      type: [String],
      default: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Java",
        "Spring Boot",
      ],
    },

    // Stats
    stats: {
      projects: {
        type: String,
        default: "15+",
      },

      skills: {
        type: String,
        default: "12+",
      },

      certificates: {
        type: String,
        default: "1+",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Home", homeSchema);