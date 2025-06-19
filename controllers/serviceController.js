const Service = require('../models/serviceModel');

// Get All Services
const getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

// Create New Service
const createService = async (req, res) => {
  const { title, description, image } = req.body;
  const service = await Service.create({ title, description, image });
  res.status(201).json(service);
};

module.exports = { getServices, createService };
