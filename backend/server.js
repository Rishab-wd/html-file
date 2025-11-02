const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactroute');

dotenv.config();
const app = express();

// --- Middleware ---
app.use(cors({
  origin: 'https://fitnessfever-gym.vercel.app', // your frontend domain
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// --- Routes ---
app.use('/api', contactRoutes);

// --- Database Connection ---
console.log('🧩 Checking Mongo URI:', process.env.MONGO_URI); // Debug log

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => {
  console.error('❌ MongoDB Connection Failed:', err.message);
  console.error('🧠 Full Error Object:', err);
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
