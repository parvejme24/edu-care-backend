const mongoose = require("mongoose");
const { Schema } = mongoose;

const gallerySchema = new Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
