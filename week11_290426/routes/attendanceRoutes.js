const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Add attendance
router.post("/", async (req, res) => {
  const record = new Attendance(req.body);
  const saved = await record.save();
  res.json(saved);
});

// Get attendance
router.get("/", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

module.exports = router;