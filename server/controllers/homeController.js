const Home = require("../models/Home");

// GET Home Data
const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE / UPDATE Home
const saveHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    if (!home) {
      home = await Home.create(req.body);
    } else {
      home = await Home.findByIdAndUpdate(
        home._id,
        req.body,
        {
          returnDocument: "after",
        }
      );
    }

    res.status(200).json({
      success: true,
      home,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getHome,
  saveHome,
};