const Experience = require("../models/Experience");

// =========================
// GET ALL EXPERIENCES
// =========================

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({
      createdAt: -1,
    });

    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// GET SINGLE EXPERIENCE
// =========================

const getExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(
      req.params.id
    );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// CREATE EXPERIENCE
// =========================

const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(
      req.body
    );

    res.status(201).json({
      success: true,
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// UPDATE EXPERIENCE
// =========================

const updateExperience = async (req, res) => {
  try {
    const experience =
      await Experience.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      experience,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// DELETE EXPERIENCE
// =========================

const deleteExperience = async (req, res) => {
  try {
    const experience =
      await Experience.findByIdAndDelete(
        req.params.id
      );

    if (!experience) {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};