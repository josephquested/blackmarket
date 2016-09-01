var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = (gangName) => {
 return [{
    type: 'password',
    name: 'password',
    message: `what is the password for ${gangName}?`
  }]
}


var confirmPasswordActions = [
  {
    type: 'password',
    name: 'password',
    message: 'say it again'
  }
]

var confirmStartGangActions = [
  {
    type: 'list',
    name: 'password',
    message: 'are you sure you want to start the *gang*?'
    choices: ['yes', 'no']
  }
]

function initEvent (gangName) {
  initActions[0].message = `what is the password for ${gangName}?`
  event(initActions(gangName), (action) => {
    if (action.password == '') return initEvent(gangName)
    return confirmPasswordEvent(gangName, action.password)
  })
}

function confirmPasswordEvent (gangName, password) {
  event(confirmPasswordActions, (action) => {
    if (action.password == '') return confirmPasswordEvent(gangName, password)
    if (action.password == password) {
      console.log('passwords match!')
    } else {
      console.log('wrong')
    }
  })
}

function confirmStartGang (gangName, password) {
  event(confirmStartGangActions, (action) => {
    if (action.password == '') return confirmPasswordEvent(password)
    if (action.password == password) {
      console.log('passwords match!')
    } else {
      console.log('wrong')
    }
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
