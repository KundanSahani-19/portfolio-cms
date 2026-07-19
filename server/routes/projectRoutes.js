const express = require("express");

const router = express.Router();

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");

// Public: Get all projects
router.get("/", getProjects);

// Public: Get single project
router.get("/:id", getProject);

// Admin: Create project
router.post("/", protect, createProject);

// Admin: Update project
router.put("/:id", protect, updateProject);

// Admin: Delete project
router.delete("/:id", protect, deleteProject);

module.exports = router;