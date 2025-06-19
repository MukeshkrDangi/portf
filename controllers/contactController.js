const Contact = require('../models/contactModel');

// Submit Contact Form
const submitContact = async (req, res) => {
  const { name, email, service, message } = req.body;
  const contact = await Contact.create({ name, email, service, message });
  res.status(201).json(contact);
};

// Get All Contact Submissions
const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

module.exports = { submitContact, getContacts };
