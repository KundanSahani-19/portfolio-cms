const express = require("express");
const router = express.Router();

const {
  getHome,
  saveHome,
} = require("../controllers/homeController");

const protect = require("../middleware/authMiddleware");

// ================= Public Route =================

// Get Home Data
router.get("/", getHome);

// ================= Temporary Seed Route =================

router.get("/seed", async (req, res) => {
  const Home = require("../models/Home");

  try {
    let home = await Home.findOne();

    if (!home) {
      home = await Home.create({
        greeting: "👋 Hello, I'm",
        name: "Kundan Sahani",

        roles: [
          "Full Stack Developer",
          "MERN Stack Developer",
          "Java Developer",
        ],

        tagline:
          "Building scalable web applications with React, Node.js and Spring Boot.",

        availableText:
          "Available for Internship & Full Time",

        hireButton: "Hire Me",

        resumeButton: "Download Resume",

        github: "https://github.com/",

        linkedin: "https://linkedin.com/",

        email: "kundansahani11023@gmail.com",

        floatingSkills: [
          "React",
          "Node.js",
          "MongoDB",
          "Java",
          "Spring Boot",
        ],
      });
    }

    res.json(home);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= Admin Route =================

router.put("/", protect, saveHome);

module.exports = router;