const Portfolio = require('../models/portfolioModel');

// Get All Portfolio Items
const getPortfolio = async (req, res) => {
  const portfolio = await Portfolio.find();
  res.json(portfolio);
};

// Create New Portfolio Item
const createPortfolioItem = async (req, res) => {
  const { title, category, image, description } = req.body;
  const item = await Portfolio.create({ title, category, image, description });
  res.status(201).json(item);
};

module.exports = { getPortfolio, createPortfolioItem };
