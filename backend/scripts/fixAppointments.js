// backend/scripts/fixAppointments.js
const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

const connectDB = require('../config/db');

connectDB();

const fixAppointments = async () => {
  try {
    // Find all appointments with doctorId: null
    const appointments = await Appointment.find({ doctorId: null });

    // Get the first doctor from the database
    const doctor = await Doctor.findOne();

    if (!doctor) {
      console.error('No doctors found in the database.');
      return;
    }

    // Update each appointment with the doctor's ID
    for (const appointment of appointments) {
      appointment.doctorId = doctor._id;
      await appointment.save();
      console.log(`Updated appointment ${appointment._id} with doctor ${doctor._id}`);
    }

    console.log('All appointments updated successfully.');
  } catch (err) {
    console.error('Error updating appointments:', err);
  } finally {
    mongoose.connection.close();
  }
};

fixAppointments();