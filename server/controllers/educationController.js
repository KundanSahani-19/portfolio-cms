const Education = require("../models/Education");

// GET ALL EDUCATION
const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({
      createdAt: -1,
    });

    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE EDUCATION
const getEducation = async (req, res) => {
  try {
    const education = await Education.findById(
      req.params.id
    );

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// CREATE EDUCATION
const createEducation = async (req, res) => {
  try {
    const education = await Education.create(
      req.body
    );

    res.status(201).json({
      success: true,
      education,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE EDUCATION
const updateEducation = async (req, res) => {
  try {
    const education =
      await Education.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      education,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE EDUCATION
const deleteEducation = async (req, res) => {
  try {
    const education =
      await Education.findByIdAndDelete(
        req.params.id
      );

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};