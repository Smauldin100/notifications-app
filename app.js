require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const infineteRoutes = require('./routes/infineteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/infinete', infineteRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`API Infinete is running on http://localhost:${PORT}`);
});
