const College = require("../models/College");

exports.createCollege = async (req, res) => {
  try {
    const college = new College(req.body);
    const savedCollege = await college.save();
    res.status(201).json(savedCollege);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).json({ message: "College not found" });
    res.status(200).json(college);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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

exports.deleteCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) return res.status(404).json({ message: "College not found" });
    res.status(200).json({ message: "College deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
