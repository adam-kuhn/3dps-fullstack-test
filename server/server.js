const path = require('path')
const express = require('express')

const talks = require('./routes/talks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/talks', talks)

module.exports = server
