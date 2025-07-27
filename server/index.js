const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://127.0.0.1:27017/healthcare');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Routes
app.use('/api', require('./routes/auth'));



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});