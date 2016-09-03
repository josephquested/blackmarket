var event = require('../flow/event')
var ajax = require('../ajax/ajax')

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

function confirmStartGangEvent (gangName, password) {
  event(confirmStartGangActions(gangName), (action) => {
    var gangData = { name: gangName, password: password }
    if (action.choice == 'yes') {
      ajax.post('http://localhost:3000/gangs', gangData, (res) => {
        // start socket
        require('./menu')(gangName)
      })
    } else {
      require('./login')()
    }
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
