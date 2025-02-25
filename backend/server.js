const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

connectDB();

// Mount the routes
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));