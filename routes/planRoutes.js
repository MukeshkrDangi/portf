const { protect } = require('../middleware/authMiddleware');
const { getPlans, createPlan } = require('../controllers/planController');
const Plan = require('../models/planModel');

router.get('/', getPlans);
router.post('/', protect, createPlan);

// Delete Plan Route
router.delete('/:id', protect, async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  if (plan) {
    await plan.deleteOne();
    res.json({ message: 'Plan removed' });
  } else {
    res.status(404).json({ message: 'Plan not found' });
  }
});

module.exports = router;
