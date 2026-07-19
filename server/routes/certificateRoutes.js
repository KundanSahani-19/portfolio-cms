const express = require("express");

const router = express.Router();

const {
  getCertificates,
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");

const protect = require("../middleware/authMiddleware");


// PUBLIC
router.get("/", getCertificates);

router.get("/:id", getCertificate);


// ADMIN
router.post(
  "/",
  protect,
  createCertificate
);

router.put(
  "/:id",
  protect,
  updateCertificate
);

router.delete(
  "/:id",
  protect,
  deleteCertificate
);


module.exports = router;