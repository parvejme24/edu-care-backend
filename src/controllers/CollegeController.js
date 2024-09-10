const College = require("../models/College");

// add new college
exports.createCollege = async (req, res) => {
  try {
    const college = new College(req.body);
    const savedCollege = await college.save();
    res.status(201).json(savedCollege);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// get all college
exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get college by id
exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).json({ message: "College not found" });
    res.status(200).json(college);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update college info
exports.updateCollege = async (req, res) => {
  try {
    const updatedCollege = await College.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCollege)
      return res.status(404).json({ message: "College not found" });
    res.status(200).json(updatedCollege);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete a college
exports.deleteCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) return res.status(404).json({ message: "College not found" });
    res.status(200).json({ message: "College deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// search collgege by college name or short name
exports.searchCollege = async (req, res) => {
  const { query } = req.query;
  try {
    const colleges = await College.find({
      $or: [
        { collegeName: { $regex: query, $options: "i" } },
        { shortName: { $regex: query, $options: "i" } },
      ],
    });

    if (colleges.length === 0) {
      return res.status(404).json({ message: "No colleges found" });
    }

    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get top rating collge controller
exports.getTopRatedColleges = async (req, res) => {
  try {
    const colleges = await College.find().sort({ rating: -1 }).limit(10);

    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
