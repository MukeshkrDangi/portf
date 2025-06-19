// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => console.error(err));

//   const serviceRoutes = require('./routes/serviceRoutes');
//   app.use('/api/services', serviceRoutes);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const serviceRoutes = require('./routes/serviceRoutes');
const planRoutes = require('./routes/planRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const authRoutes = require('./routes/authRoutes');

app.use('/api/admin', authRoutes);
app.use(express.json());
app.use(cors());

app.use('/api/services', serviceRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contacts', contactRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
