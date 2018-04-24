const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const User = require('../../models/user')

module.exports = {
  issue,
  decode
}

function issue (req, res) {
  console.log('at issue')
  User.find({username: req.body.username})
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
    .catch(err => {
      return res.status(403).json({
        message: 'Authentication failed.',
        info: err.message
      })
    })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function createToken (user, secret) {
  return jwt.sign({
    id: user._id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

function getSecret (req, payload, done) {
  const secret = process.env.JWT_SECRET
  done(null, secret)
}
