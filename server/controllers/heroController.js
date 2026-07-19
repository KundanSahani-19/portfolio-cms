const Hero = require("../models/Hero");

// GET Hero Data
const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();

    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE / UPDATE Hero
const saveHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create(req.body);
    } else {
      hero = await Hero.findByIdAndUpdate(
        hero._id,
        req.body,
        {
          new: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      hero,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getHero,
  saveHero,
};