//Require Mongoose
import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, "Mobile is required"],
    maxlength: 10,
    minlength: 10,
    trim: true,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  doctorName: {
    type: String,
    required: [true, "Doctor Name is required"],
    trim: true,
  },
  specialization: {
    type: String,
    required: [true, "Specialization is required"],
    trim: true,
  },
});

// Apply the uniqueValidator plugin to AppointmentSchema.
AppointmentSchema.plugin(mongooseUniqueValidator);

// Compile schema to model
const AppointmentModel = mongoose.model('appointment_collection', AppointmentSchema);

export default AppointmentModel;
