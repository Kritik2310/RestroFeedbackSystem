const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Feedback = require('../models/Feedback');

// Top 5 highest-rated restaurants
router.get("/top-rated", async (req, res) => {
  try {
    const list = await Restaurant.find()
      .sort({ avgRating: -1 })
      .limit(5);
      
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/trending", async (req, res) => {
  try {
    const trending = await Feedback.aggregate([
      {
        $group: {
          _id: "$restaurantId",
          feedbackCount: { $sum: 1 }
        }
      },
      { $sort: { feedbackCount: -1 } },
      { $limit: 5 }
    ]);

    // Populate restaurant info
    const results = await Promise.all(
      trending.map(async (t) => {
        const rest = await Restaurant.findById(t._id);
        return {
          ...rest.toObject(),
          feedbackCount: t.feedbackCount
        };
      })
    );

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/most-loved", async (req, res) => {
  try {
    const rest = await Restaurant.findOne().sort({ avgRating: -1 });

    // Count reviews for this restaurant
    const feedbackCount = await Feedback.countDocuments({
      restaurantId: rest._id
    });

    res.json({
      ...rest.toObject(),
      feedbackCount
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// GET /api/restaurants - all restaurants sorted by avgRating desc
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ avgRating: -1 });
    res.json(restaurants);
  } catch(err) { res.status(500).json({ error: err.message }); }
});

// GET /api/restaurants/:id - get restaurant + its feedbacks
router.get('/:id', async (req, res) => {
  try {
    const rest = await Restaurant.findById(req.params.id);
    if(!rest) return res.status(404).json({ message: 'Restaurant not found' });
    const feedbacks = await Feedback.find({ restaurantId: rest._id }).sort({ date: -1 });
    res.json({ restaurant: rest, feedbacks });
  } catch(err){ res.status(500).json({ error: err.message }); }
});


module.exports = router;
