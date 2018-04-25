const mongoose = require('mongoose')

const talkSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
})

const Talk = mongoose.model('Talk', talkSchema)

module.exports = Talk
