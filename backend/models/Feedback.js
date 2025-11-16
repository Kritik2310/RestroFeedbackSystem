const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  username: { type: String, default: 'Anonymous' },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
