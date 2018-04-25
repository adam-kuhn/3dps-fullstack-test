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
      // eslint-disable-next-line no-console
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
    username: req.body.username,
    votes: 0
  })
  newTalk.save((err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      res.status(200).send()
    }
  })
})

router.post('/upvote', (req, res) => {
  Talk.findById(req.body.talkId, (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      result.votes += 1
      result.save((err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        } else {
          Talk.find({})
            .then(talks => {
              res.status(200).send(talks)
            })
        }
      })
    }
  })
})

module.exports = router
