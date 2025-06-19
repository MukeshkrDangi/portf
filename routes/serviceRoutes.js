const express = require('express');
const router = express.Router();
const { getServices, createService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');
const Service = require('../models/serviceModel');
const upload = require('../middleware/uploadMiddleware');

router.post('/', protect, upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file.path; // Cloudinary URL

  const service = await Service.create({ title, description, image });
  res.status(201).json(service);
});





router.post('/', createService);
router.get('/', getServices);
router.post('/', protect, createService);

// Delete Service Route
router.delete('/:id', protect, async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (service) {
    await service.deleteOne();
    res.json({ message: 'Service removed' });
  } else {
    res.status(404).json({ message: 'Service not found' });
  }
});

module.exports = router;
