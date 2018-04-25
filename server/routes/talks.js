const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

const Talk = require('../../models/talk')

router.get('/', (req, res) => {
  Talk.find({})
  // un comment to clear db
    // .deleteMany({})
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
    username: req.body.username,
    votes: 0
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

router.post('/upvote', (req, res) => {
  console.log('upvoting', req.body)
  Talk.findById(req.body.talkId, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      result.votes += 1
      result.save((err) => {
        if (err) {
          console.error(err)
        } else {
          console.log(result)
          Talk.find({})
            .then(talks => {
              console.log(talks)
              res.status(200).send(talks)
            })
        }
      })
    }
  })
})

module.exports = router
