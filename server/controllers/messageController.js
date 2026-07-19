const Message = require("../models/Message");

// CREATE MESSAGE
const createMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message:
          "Name, email and message are required",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL MESSAGES
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE MESSAGE
const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(
      req.params.id
    );

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// MARK AS READ
const markMessageAsRead = async (req, res) => {
  try {
    const message =
      await Message.findByIdAndUpdate(
        req.params.id,
        {
          isRead: true,
        },
        {
          new: true,
        }
      );

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE MESSAGE
const deleteMessage = async (req, res) => {
  try {
    const message =
      await Message.findByIdAndDelete(
        req.params.id
      );

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createMessage,
  getMessages,
  getMessage,
  markMessageAsRead,
  deleteMessage,
};