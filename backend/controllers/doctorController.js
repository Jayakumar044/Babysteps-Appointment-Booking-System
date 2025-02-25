// backend/controllers/doctorController.js
const Doctor = require('../models/Doctor');

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, workingHours } = req.body;
    const newDoctor = new Doctor({ name, workingHours });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, workingHours } = req.body;
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { name, workingHours },
      { new: true }
    );
    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    await Doctor.findByIdAndDelete(id);
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};