const Certificate = require("../models/Certificate");

// GET ALL CERTIFICATES
const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({
      createdAt: -1,
    });

    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE CERTIFICATE
const getCertificate = async (req, res) => {
  try {
    const certificate =
      await Certificate.findById(req.params.id);

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// CREATE CERTIFICATE
const createCertificate = async (req, res) => {
  try {
    const certificate =
      await Certificate.create(req.body);

    res.status(201).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE CERTIFICATE
const updateCertificate = async (req, res) => {
  try {
    const certificate =
      await Certificate.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE CERTIFICATE
const deleteCertificate = async (req, res) => {
  try {
    const certificate =
      await Certificate.findByIdAndDelete(
        req.params.id
      );

    if (!certificate) {
      return res.status(404).json({
        message: "Certificate not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getCertificates,
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
};