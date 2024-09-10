const mongoose = require("mongoose");
const { Schema } = mongoose;

const collegeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  department: {
    type: String,
  },
  admissionDate: {
    type: Date,
    required: true,
  },
  researchCount: {
    type: Number,
  },
  events: [
    {
      type: String,
    },
  ],
  sports: [
    {
      type: String,
    },
  ],
  researchHistory: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("College", collegeSchema);
