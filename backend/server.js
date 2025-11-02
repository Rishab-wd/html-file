const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactroute');

dotenv.config();
const app = express();

// --- Middleware ---
app.use(cors({
  origin: 'https://special-space-tribble-5g5wwvq9rxxp275rj-5500.app.github.dev',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// --- Routes ---
app.use('/api', contactRoutes);

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
