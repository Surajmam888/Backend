import cors from 'cors';
import express from 'express';
import AppointmentModel from '../models/AppointmentSchema.js';

const router = express.Router();

/**
 * @route   POST /api/appointments
 * @desc    Create a new appointment
 * @access  Public
 */
router.post('/appointments', async (req, res) => {
  try {
    const { name, email, mobile, date, time, doctorName, specialization } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !date || !time || !doctorName || !specialization) {
      return res.status(400).json({ status: false, message: "All fields are required." });
    }

    // Save appointment to database
    const appointment = await AppointmentModel.create(req.body);
    return res.status(201).json({ status: true, message: "Appointment created successfully.", data: appointment });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return res.status(500).json({ status: false, message: "Failed to create appointment.", error: error.message });
  }
});

/**
 * @route   GET /api/appointments
 * @desc    Get all appointments
 * @access  Public
 */
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    return res.status(200).json({ status: true, data: appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return res.status(500).json({ status: false, message: "Failed to fetch appointments.", error: error.message });
  }
});

/**
 * @route   GET /api/appointments/:id
 * @desc    Get a single appointment by ID
 * @access  Public
 */
router.get('/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentModel.findById(id);
    if (!appointment) {
      return res.status(404).json({ status: false, message: "Appointment not found." });
    }
    return res.status(200).json({ status: true, data: appointment });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return res.status(500).json({ status: false, message: "Failed to fetch appointment.", error: error.message });
  }
});

/**
 * @route   PUT /api/appointments/:id
 * @desc    Update an appointment by ID
 * @access  Public
 */
router.put('/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await AppointmentModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedAppointment) {
      return res.status(404).json({ status: false, message: "Appointment not found." });
    }
    return res.status(200).json({ status: true, message: "Appointment updated successfully.", data: updatedAppointment });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return res.status(500).json({ status: false, message: "Failed to update appointment.", error: error.message });
  }
});

/**
 * @route   DELETE /api/appointments/:id
 * @desc    Delete an appointment by ID
 * @access  Public
 */
router.delete('/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ status: false, message: "Appointment not found." });
    }
    return res.status(200).json({ status: true, message: "Appointment deleted successfully." });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return res.status(500).json({ status: false, message: "Failed to delete appointment.", error: error.message });
  }
});

export default router;
