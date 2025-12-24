const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactroute');

dotenv.config();
const app = express();

// --- Middleware ---
app.use(cors({
  origin: '*', // replace with your domain in production
  methods: ['POST', 'GET'],
}));
app.use(express.json());

// --- Routes ---
app.use('/api/contact', contactRoutes);

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
