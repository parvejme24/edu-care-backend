const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
  address: { type: String, required: true },
});

const departmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
});

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  field: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  image: { type: String },
});

const collegeSchema = new mongoose.Schema({
  collegeCode: { type: String, required: true },
  image: { type: String, required: true },
  thumbnailImage: { type: String, required: true }, // Additional thumbnail image field
  collegeName: { type: String, required: true },
  shortName: { type: String, required: true },
  establishedYear: { type: Number, required: true },
  type: { type: String, required: true },
  location: { type: locationSchema, required: true },
  website: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  campusSize: { type: String, required: true },
  numStudents: { type: Number, required: true },
  numFaculty: { type: Number, required: true },
  rank: { type: Number, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true }, // History/Description field for long text with paragraphs
  departments: [departmentSchema],
  coursesOffered: { type: [String], required: true },
  admissionDates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  researchAreas: { type: [String], required: true },
  sportsFacilities: { type: [String], required: true },
  events: [eventSchema],
  graduateEmploymentRate: { type: String, required: true },
  studentToFacultyRatio: { type: String, required: true },
  scholarshipAvailable: { type: Boolean, required: true },
  annualTuitionFees: {
    domestic: { type: Number, required: true },
    international: { type: Number, required: true },
  },
  campusHostelAvailable: { type: Boolean, required: true },
  internationalStudentPrograms: { type: Boolean, required: true },
  partnerships: { type: [String], required: true },
  notableAlumni: [alumniSchema],
  averageClassSize: { type: Number, required: true },
  facultyResearchFunding: { type: String, required: true },
  campusImages: { type: [String], required: true }, // List of campus images
  eventsImages: { type: [String], required: true }, // List of event images
  sportsImages: { type: [String], required: true }, // List of sports images
});

// Create the College model from the schema
const College = mongoose.model("College", collegeSchema);

module.exports = College;
