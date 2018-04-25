const express = require('express')
const mongoose = require('mongoose')

const User = require('../../models/user')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/register', register, token.issue)
router.post('/login', login, token.issue)

function register (req, res, next) {
  User.find({username: req.body.username})
    .then(result => {
      if (result.length >= 1) {
        return res.status(400).send({
          errorType: 'USERNAME_UNAVAILABLE'
        })
      }

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: hash.generate(req.body.password)
      })
      newUser.save((err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        } else {
          next()
        }
      })
    })

    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function login (req, res, next) {
  User.find({username: req.body.username})
    .then(user => {
      return user[0] || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.password, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })

    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
