const { EventEmitter } = require('events')
const { promiseOne, promiseTwo, funcOne, funcTwo } = require('./exec-functions')

const eventEmitter = new EventEmitter()

eventEmitter.addListener('fire', funcOne)
eventEmitter.addListener('fire', funcTwo)
eventEmitter.addListener('fire', promiseOne)
eventEmitter.addListener('fire', function(data){ promiseTwo.call(this, data, true) })

console.time('EXEC')
eventEmitter.emit('fire', { name: 'Melqui' })
eventEmitter.on('finish', (data) => {
  console.log(data)
  console.timeEnd('EXEC')
})
