const express = require('express');
const {
  getDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');

const router = express.Router();

// Define the /doctors route
router.route('/')
  .get(getDoctors) // GET /doctors
  .post(createDoctor); // POST /doctors

router.route('/:id')
  .put(updateDoctor) // PUT /doctors/:id
  .delete(deleteDoctor); // DELETE /doctors/:id

module.exports = router;