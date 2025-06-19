const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // Logo Design, Video Editing, etc.
  image: { type: String },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
