const express = require("express");
const router = express.Router();

// Fields Route Test
router.get("/test", (req, res) => res.json({ msg: "Fields Works" }));

module.exports = router;
