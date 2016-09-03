var event = require('../flow/event')
var io = require('socket.io-client')
var socket = io.connect('http://localhost:3000')

var initActions = () => {
  return [{
    type: 'list',
    name: 'choice',
    message: 'are you coming in?',
    choices: ['yes', 'no']
  }]
}

module.exports = function () {
  event(initActions(), (action) => {
    if (action.choice == 'yes') {
      require('./login')()
    } else {
      require('../flow/exit')()
    }
  })
}
