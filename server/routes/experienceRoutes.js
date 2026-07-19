const express = require("express");

const router = express.Router();

const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");

const protect = require("../middleware/authMiddleware");


// =========================
// PUBLIC ROUTES
// =========================

router.get("/", getExperiences);

router.get("/:id", getExperience);


// =========================
// ADMIN ROUTES
// =========================

router.post(
  "/",
  protect,
  createExperience
);

router.put(
  "/:id",
  protect,
  updateExperience
);

router.delete(
  "/:id",
  protect,
  deleteExperience
);


module.exports = router;