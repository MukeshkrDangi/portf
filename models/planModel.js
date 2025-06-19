const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  features: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema);
