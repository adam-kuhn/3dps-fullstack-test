require('dotenv').config()

const server = require('./server')
const mongoose = require('mongoose')

const User = require('../models/user')
const Talk = require('../models/talk')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

mongoose.connect('mongodb://localhost/lightning-talks', (err) => {
  if (err) console.error(err)
  else {
    console.log('hey connected')
  }
})
