require('dotenv').config()

const server = require('./server')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

mongoose.connect('mongodb://localhost/lightning-talks', (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err)
  else {
    // eslint-disable-next-line no-console
    console.log('DB connected')
  }
})
