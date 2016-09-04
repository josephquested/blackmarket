var io = require('socket.io-client')
GLOBAL.socket = io.connect('http://localhost:3000')

module.exports = function (callback) {
  socket.on('setId', (id) => {
    socket.id = id
    socket.doesGangExist = require('./does-gang-exist')
    socket.getOneByName = require('./get-one-by-name')
    socket.isPasswordValid = require('./is-password-valid')
    socket.startGang = require('./start-gang')
    socket.setGangName = require('./set-gang-name')
    callback()
  })
}
