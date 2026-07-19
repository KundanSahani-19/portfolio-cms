const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const Admin = require("../models/Admin");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    console.log("🎉 Admin Created Successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });