const express = require('express')
const mongoose = require('mongoose')

const User = require('../../models/user')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/register', register, token.issue)
// router.post('/login', login, token.issue)

function register (req, res, next) {
  User.find({username: req.body.username})
    .then(result => {
      if (result !== null) {
        return res.status(400).send({
          errorTpe: 'USERNAME_UNAVAILABLE'
        })
      }
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
      })
      newUser.save((err) => {
        if (err) {
          console.error(err)
        } else {
          console.log('new user saved!')
        }
      })
        .then(() => next())
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function login (req, res, next) {
  console.log(req.body)
  User.find({username: req.body.username})
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      console.log('success')
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
