import express from 'express';
import AppointmentModel from '../models/AppointmentSchema.js'; 

const router = express.Router();

router.post('/appointment', async (req, res) => {
  try {
    const appointmentDetails = req.body;

    const { name, email, mobile, date, time, doctorName, specialization } = appointmentDetails;

    if (!name || !email || !mobile || !date || !time || !doctorName || !specialization) {
      return res.status(400).json({ status: false, message: "All fields are required." });
    }

    const appointment = await AppointmentModel.create(appointmentDetails);

    return res.status(201).json({ status: true, message: "Appointment created successfully.", data: appointment });
  } catch (error) {
    console.error("Error creating appointment:", error);

    return res.status(500).json({ status: false, message: "Failed to create appointment.", error: error.message });
  }
});

export default router;
