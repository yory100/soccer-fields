const express = require("express");
const router = express.Router();

const Reservations = require("../models/Reservations");

// Test reservations route
router.get("/test", (req, res) => res.json({ msg: "Reservations Works" }));

module.exports = router;
