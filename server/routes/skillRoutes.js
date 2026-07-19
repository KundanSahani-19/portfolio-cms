const express = require("express");

const router = express.Router();

const {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const protect = require("../middleware/authMiddleware");

// PUBLIC
router.get("/", getSkills);

router.get("/:id", getSkill);

// ADMIN
router.post("/", protect, createSkill);

router.put("/:id", protect, updateSkill);

router.delete("/:id", protect, deleteSkill);

module.exports = router;