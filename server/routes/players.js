const express = require("express");
const router = express.Router();

const Players = require("../models/Players");

// Test players route
router.get("/test", (req, res) => res.json({ msg: "Players Works" }));

module.exports = router;
