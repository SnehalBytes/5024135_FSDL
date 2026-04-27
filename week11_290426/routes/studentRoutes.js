const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Add student
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  const saved = await student.save();
  res.json(saved);
});

// Get all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Delete student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;