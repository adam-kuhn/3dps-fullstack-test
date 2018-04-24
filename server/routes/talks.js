const express = require('express')
const router = express.Router()

const Talk = require('../../models/talk')

router.get('/', (req, res) => {
  Talk.find({})
    .then(talks => {
      if (talks.length < 1) {
        console.log('nothing')
        res.status(200).send(talks)
      } else {
        res.status(200).send(talks)
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

module.exports = router
