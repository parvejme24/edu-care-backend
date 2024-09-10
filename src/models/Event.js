const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
