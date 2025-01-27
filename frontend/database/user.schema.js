import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  // Basic Information
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'],
  },
  password: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,  // Optional field
  },

  // College/Alumni Details
  college: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to College Model
    ref: 'College',
    required: false,
  },
  graduationYear: {
    type: Number,
    required: false,
  },
  fieldOfStudy: {
    type: String,
    required: false,  // Optional
  },
  bio: {
    type: String,
    required: false,  // Optional
  },
  profileType: {
    type: String,
    enum: ['Student', 'Alumni', 'Faculty'],
    default: 'Student',
  },

  // Profile Completion & Additional Information
  profileComplete: {
    type: Boolean,
    default: false,
  },

  // Social Links (Optional)
  linkedin: {
    type: String,
    required: false,  // Optional
  },
  github: {
    type: String,
    required: false,  // Optional
  },

  // User Preferences & Settings
  notificationsEnabled: {
    type: Boolean,
    default: true,
  },

  // Alumni-specific Data (Once Profile is Complete)
  jobHistory: [{
    companyName: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
  }],

  // Security & Authentication
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },

  profilePicture: {
    type: String,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the 'updatedAt' field whenever the document is updated
userSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

// Check if the model is already defined before defining it
const Users = mongoose?.models?.Users || mongoose.model('Users', userSchema);

export default Users;
