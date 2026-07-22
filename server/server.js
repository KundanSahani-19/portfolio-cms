const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const homeRoutes = require("./routes/homeRoutes");
const skillRoutes = require("./routes/skillRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const educationRoutes = require("./routes/educationRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const messageRoutes = require("./routes/messageRoutes");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();


// =================================
// MIDDLEWARE
// =================================

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());


// =================================
// API ROUTES
// =================================

app.use("/api/admin", adminRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/home", homeRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/skills", skillRoutes);

app.use("/api/experiences", experienceRoutes);

app.use("/api/educations", educationRoutes);

app.use("/api/certificates", certificateRoutes);

app.use("/api/messages", messageRoutes);


// =================================
// TEST ROUTE
// =================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio CMS API Running...",
  });
});


// =================================
// ERROR HANDLER
// =================================

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


// =================================
// SERVER
// =================================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});