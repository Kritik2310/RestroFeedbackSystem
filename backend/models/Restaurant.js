const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String, // store URL or filename
  description: String,
  location: String,
  avgRating: { type: Number, default: 0 },
  totalRatings: { type: Number, default: 0 }, // helpful to compute avg
  ratingSum: { type: Number, default: 0 } // sum of ratings
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
