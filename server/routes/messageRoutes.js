const express = require("express");

const router = express.Router();

const {
  createMessage,
  getMessages,
  getMessage,
  markMessageAsRead,
  deleteMessage,
} = require("../controllers/messageController");

const protect = require("../middleware/authMiddleware");

// =================================
// PUBLIC ROUTE
// =================================

// Contact form se message send hoga
// Is route par login/token ki zarurat nahi hai
router.post("/", createMessage);


// =================================
// ADMIN PROTECTED ROUTES
// =================================

// Admin ke messages
router.get("/", protect, getMessages);

// Single message
router.get("/:id", protect, getMessage);

// Mark as read
router.put("/:id/read", protect, markMessageAsRead);

// Delete message
router.delete("/:id", protect, deleteMessage);


module.exports = router;