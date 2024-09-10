const mongoose = require("mongoose");
const { Schema } = mongoose;

const researchPaperSchema = new Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String, // URL to the research paper
    required: true,
  },
  publishedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("ResearchPaper", researchPaperSchema);
