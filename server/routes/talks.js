const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/', (req, res) => {
  User.find({})
    .deleteMany({})
    .then(eachOne => {
      console.log(eachOne)
    })
  User.findById('5add4b7b4a2ea96600c20d29', (err, result) => {
    if (err) throw err

    console.log('found id', result)
  })
})

module.exports = router
