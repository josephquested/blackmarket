var event = require('../flow/event')

function initActions (gangName) {
  return [{
    type: 'password',
    name: 'password',
    message: `what is the password for ${gangName}?`
  }]
}

function confirmPasswordActions () {
  return [{
    type: 'password',
    name: 'password',
    message: 'say it again'
  }]
}

function confirmStartGangActions (gangName) {
  return [{
    type: 'list',
    name: 'choice',
    message: `are you sure you want to start the ${gangName} gang?`,
    choices: ['yes', 'no']
  }]
}

function initEvent (gangName) {
  event(initActions(gangName), (action) => {
    if (action.password == '') return initEvent(gangName)
    return confirmPasswordEvent(gangName, action.password)
  })
}

function confirmPasswordEvent (gangName, password) {
  event(confirmPasswordActions(), (action) => {
    if (action.password == '') return confirmPasswordEvent(gangName, password)
    if (action.password == password) {
      confirmStartGangEvent(gangName, password)
    } else {
      initEvent(gangName)
    }
  })
}

function confirmStartGangEvent (name, password) {
  event(confirmStartGangActions(name), (action) => {
    if (action.choice == 'yes') {
      handleStartGang(name, password)
    } else {
      require('./login')()
    }
  })
}

function handleStartGang (name, password) {
  socket.startGang(name, password)
  socket.on('startGangResponse', (res) => {
    if (res) {
      socket.gangName = name
      require('./menu')()
    } else {
      console.log('† ERROR STARTING GANG †')
    }
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
