//Require Mongoose
import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"email is required"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  mobile: {
    type: String,
    required: [true,"Mobile is required"],
    maxlength: 10,
    minlength:10,
    trim: true
  },
  address: {
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
  city: {
    type: String,
    required: [true,"City is required"],
    trim: true
  },
  gender: {
    type: String,
    required: [true,"Gender is required"],
  },
  userType: String,
  status: Number,
  info: String,
  date: {
    type: Date,
    default: Date.now, 
    required: true,
  },
  time: {
    type: String,
    required: true,
    default: () => new Date().toLocaleTimeString(),
  },
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(mongooseUniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel