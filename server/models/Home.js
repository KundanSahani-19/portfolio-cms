const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    // =========================
    // HERO SECTION
    // =========================

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

    // =========================
    // BUTTONS
    // =========================

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

    // =========================
    // ABOUT SECTION
    // =========================

    about: {
      description: {
        type: String,
        default: "",
      },

      experience: {
        type: String,
        default: "",
      },

      education: {
        type: String,
        default: "",
      },
    },

    // =========================
    // SOCIAL LINKS
    // =========================

    social: {
      github: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },

      instagram: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },

      email: {
        type: String,
        default: "",
      },

      website: {
        type: String,
        default: "",
      },
    },

    // =========================
    // FLOATING SKILLS
    // =========================

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

    // =========================
    // STATISTICS
    // =========================

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