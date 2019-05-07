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
// @access To be considered lately
router.post("/add", (req, res) => {
  const newField = new Field({
    name: req.body.fieldName,
    address: req.body.fieldAddress,
    tel: req.body.fieldTel,
    openFrom: req.body.open_from,
    openTo: req.body.to
  });

  newField
    .save()
    .then(field => res.json(field))
    .catch(err => console.log("Error:" + err));
});

module.exports = router;
