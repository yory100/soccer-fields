const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const keys = require('../keys')

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }))

router.post('/register', (req, res) =>
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json('Email already exists!')
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
)

router.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  // Find the user by email
  User.findOne({ username: username })
    .then(user => {
      // Check for user
      if (!user) {
        return res.status(404).json('User not found')
      }

      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // User Matched

            const payload = { id: user.id, name: user.name } // Create JWT payload

            // Sign Token
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 864000 }, (err, token) => {
              res.json({
                token
              })
            })
          } else {
            res.status(400).json('Password incorrect')
          }
        })
    })
})

module.exports = router
