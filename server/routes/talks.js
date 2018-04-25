const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

const Talk = require('../../models/talk')

router.get('/', (req, res) => {
  Talk.find({})
    .then(talks => {
      res.status(200).send(talks)
    })
    .catch((err) => {
      console.error(err)
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

router.post('/', (req, res) => {
  const newTalk = new Talk({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.title,
    username: req.body.username
  })
  newTalk.save((err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('new talk saved!')
      res.status(200).send()
    }
  })
})

module.exports = router
