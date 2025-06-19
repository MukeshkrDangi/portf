const express = require('express');
const router = express.Router();
const { getPortfolio, createPortfolioItem } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

const Portfolio = require('../models/portfolioModel');
router.get('/', getPortfolio);
router.post('/', protect, createPortfolioItem);


router.post('/', createPortfolioItem);


// Delete Portfolio Route
router.delete('/:id', protect, async (req, res) => {
  const item = await Portfolio.findById(req.params.id);
  if (item) {
    await item.deleteOne();
    res.json({ message: 'Portfolio item removed' });
  } else {
    res.status(404).json({ message: 'Portfolio item not found' });
  }
});



module.exports = router;
