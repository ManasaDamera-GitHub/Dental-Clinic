const express = require("express");
const router = express.Router();
const User = require("../Models/UserSchema.js");

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
    console.error("Error fetching users:", error);
  }
});

router.post("/data", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newUser = new User({ name, email, subject, message });
    await newUser.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
