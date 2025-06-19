const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'freelancer-portfolio', // you can name the folder
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
});

const upload = multer({ storage });

module.exports = upload;
