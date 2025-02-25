const express = require('express');
const {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

// Define the /appointments route
router.route('/')
  .get(getAppointments) // GET /appointments
  .post(createAppointment); // POST /appointments

router.route('/:id')
  .put(updateAppointment) // PUT /appointments/:id
  .delete(deleteAppointment); // DELETE /appointments/:id

module.exports = router;