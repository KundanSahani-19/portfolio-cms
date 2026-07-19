const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const homeRoutes = require("./routes/homeRoutes");
const skillRoutes = require("./routes/skillRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const educationRoutes = require("./routes/educationRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ================= Routes =================

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/home", homeRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/educations", educationRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/messages", messageRoutes);

// ================= Test Route =================

app.get("/", (req, res) => {
  res.send("Portfolio CMS API Running...");
});

// ================= Server =================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});