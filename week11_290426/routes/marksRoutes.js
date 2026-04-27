const express = require("express");
const router = express.Router();
const Marks = require("../models/Marks");

// Add marks
router.post("/", async (req, res) => {
  const marks = new Marks(req.body);
  const saved = await marks.save();
  res.json(saved);
});

// Get marks
router.get("/", async (req, res) => {
  const data = await Marks.find();
  res.json(data);
});

module.exports = router;