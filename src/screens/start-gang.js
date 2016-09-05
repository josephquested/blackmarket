var event = require('../flow/event')
var actions = require('../actions/start-gang')

function initEvent (gangName) {
  event(actions.init(gangName), (action) => {
    if (action.password == '') return initEvent(gangName)
    return confirmPasswordEvent(gangName, action.password)
  })
}

function confirmStartGangEvent (name, password) {
  event(actions.confirmStartGang(name), (action) => {
    if (action.choice == 'yes') {
      handleStartGang(name, password)
    } else {
      require('./login')()
    }
  })
}

function handleStartGang (name, password) {
  socket.startGang(name, password)
  socket.once('startGangResponse', (res) => {
    if (res) {
      socket.gangName = name
      require('./menu')()
    } else {
      console.log('† ERROR STARTING GANG †')
    }
  })
}

function confirmPasswordEvent (gangName, password) {
  event(actions.confirmPassword(), (action) => {
    if (action.password == '') return confirmPasswordEvent(gangName, password)
    if (action.password == password) {
      confirmStartGangEvent(gangName, password)
    } else {
      initEvent(gangName)
    }
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
