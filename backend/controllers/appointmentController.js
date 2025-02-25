const Appointment = require('../models/Appointment');

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctorId');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Book a new appointment
exports.createAppointment = async (req, res) => {
  const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

  try {
    const newAppointment = new Appointment({
      doctorId,
      date,
      duration,
      appointmentType,
      patientName,
      notes,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { doctorId, date, duration, appointmentType, patientName, notes },
      { new: true }
    );
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cancel an appointment
exports.deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    await Appointment.findByIdAndDelete(id);
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};