const Home = require("../models/Home");

// GET Home Data
const getHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    // Agar Home document nahi hai to automatically create karo
    if (!home) {
      home = await Home.create({});
    }

    res.status(200).json(home);
  } catch (error) {
    console.error("GET HOME ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE / UPDATE Home
const saveHome = async (req, res) => {
  try {
    console.log("📥 HOME UPDATE BODY:", req.body);

    let home = await Home.findOne();

    if (!home) {
      home = await Home.create(req.body);
    } else {
      home = await Home.findByIdAndUpdate(
        home._id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      home,
    });
  } catch (error) {
    console.error("❌ SAVE HOME ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getHome,
  saveHome,
};