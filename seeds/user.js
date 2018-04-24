const seeder = require('mongoose-seed')

seeder.connect('mongodb://localhost/lightning-talks', () => {
  seeder.loadModels([
    '../models/user.js'
  ])
})

seeder.clearModels(['User'], () => {
  seeder.populateModels(data, () => {
    seeder.disconnect()
  })
})

const data = [
  {
    model: 'User',
    documents: [{
      username: 'guest',
      password: 'guest'
    }]
  }

]
