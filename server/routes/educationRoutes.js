const express = require("express");

const router = express.Router();

const {
  getEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

const protect = require("../middleware/authMiddleware");


// PUBLIC ROUTES

router.get("/", getEducations);

router.get("/:id", getEducation);


// ADMIN ROUTES

router.post(
  "/",
  protect,
  createEducation
);

router.put(
  "/:id",
  protect,
  updateEducation
);

router.delete(
  "/:id",
  protect,
  deleteEducation
);


module.exports = router;