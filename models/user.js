const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  password: {
    type: Buffer,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
