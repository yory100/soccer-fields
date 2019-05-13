const express = require("express");
const router = express.Router();

const Player = require("../models/Players");

// Test players route
router.get("/test", (req, res) => res.json({ msg: "Players Works" }));

// @route   GET /server/players/get
// @desc Fetch All Players
// @access  Public
router.get("/", (req, res) => {
  Player.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ noplayersfound: "No players found" }));
});

// @route   POST /server/player/add
// @desc Create New Player
// @access private
router.post("/add", (req, res) => {
  const newPlayer = new Player({
    name: req.body.name,
    age: req.body.age,
    games: req.body.games,
    goals: req.body.goals,
    assists: req.body.assists,
    picture: req.body.picture
  });

  newPlayer
    .save()
    .then(player => res.json(player))
    .catch(err => console.log("Error:" + err));
});

module.exports = router;
