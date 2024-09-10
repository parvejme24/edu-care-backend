const mongoose = require("mongoose");
const { Schema } = mongoose;

const admissionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userEmail: {
    type: String,
    ref: "User",
    required: true,
  },
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  candidateEmail: {
    type: String,
    required: true,
  },
  candidatePhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Admission", admissionSchema);
