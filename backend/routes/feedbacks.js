const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const Restaurant = require('../models/Restaurant');

// POST /api/feedbacks - add new feedback and update restaurant rating
router.post('/', async (req, res) => {
  try {
    const { restaurantId, username, rating, comment } = req.body;
    if(!restaurantId || !rating) return res.status(400).json({ message: 'restaurantId and rating required' });

    // Save feedback
    const fb = new Feedback({ restaurantId, username, rating, comment });
    await fb.save();

    // Update restaurant aggregates
    const rest = await Restaurant.findById(restaurantId);
    if(!rest) return res.status(404).json({ message: 'Restaurant not found' });

    rest.totalRatings = (rest.totalRatings || 0) + 1;
    rest.ratingSum = (rest.ratingSum || 0) + rating;
    rest.avgRating = +(rest.ratingSum / rest.totalRatings).toFixed(2);

    await rest.save();

    res.status(201).json({ message: 'Feedback added', feedback: fb, avgRating: rest.avgRating });
  } catch(err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
