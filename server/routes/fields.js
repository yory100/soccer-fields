const express = require("express");
const router = express.Router();

const Field = require("../models/Field");

// Fields Route Test
router.get("/test", (req, res) => res.json({ msg: "Fields Works" }));

// @route   GET /server/fields/get
// @desc Fetch All Fields
// @access  Public
router.get("/get", (req, res) => {
  Field.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nofieldssfound: "No fields found" }));
});

// @route   POST /server/fields/add
// @desc Create New Field
// @access To be considered later
router.post("/add", (req, res) => {
  console.log(req.body);
  const newField = new Field({
    name: req.body.name,
    address: req.body.address,
    photos: req.body.pictures,
    tel: req.body.tel,
    openFrom: req.body.openFrom,
    openTo: req.body.openTo
  });

  newField
    .save()
    .then(field => res.json(field))
    .catch(err => console.log("Error:" + err));
});

// @route   GET server/fields/id
// @desc    Get Single field
// @access  Public
router.get("/id", (req, res) => {
  let lastIndexOfId = req.headers.referer.lastIndexOf("id");
  const id = req.headers.referer.slice(lastIndexOfId + 3);

  Field.findById(id)
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nofieldsfound: "No field found" }));
});

module.exports = router;
