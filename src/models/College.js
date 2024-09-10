// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const collegeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     min: 0,
//     max: 5,
//   },
//   department: {
//     type: String,
//   },
//   admissionDate: {
//     type: Date,
//     required: true,
//   },
//   researchCount: {
//     type: Number,
//   },
//   events: [
//     {
//       type: String,
//     },
//   ],
//   sports: [
//     {
//       type: String,
//     },
//   ],
//   researchHistory: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
// });

// module.exports = mongoose.model("College", collegeSchema);

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
  image: { type: String },
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
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
