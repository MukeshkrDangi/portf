const Plan = require('../models/planModel');

// Get All Plans
const getPlans = async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
};

// Create New Plan
const createPlan = async (req, res) => {
  const { name, price, description, features } = req.body;
  const plan = await Plan.create({ name, price, description, features });
  res.status(201).json(plan);
};

module.exports = { getPlans, createPlan };
