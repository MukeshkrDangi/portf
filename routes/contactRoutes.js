const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');


router.get('/', getContacts);
router.post('/', submitContact);
router.get('/', protect, getContacts); // Protected for Admin
      

module.exports = router;
