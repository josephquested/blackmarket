var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = (gangName) => {
 return [{
    type: 'password',
    name: 'password',
    message: `what is the password for ${gangName}?`
  }]
}


var confirmPasswordActions = () => {
  return [{
    type: 'password',
    name: 'password',
    message: 'say it again'
  }]
}

var confirmStartGangActions = (gangName) => {
  return {[
    type: 'list',
    name: 'confirm',
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
      initActions(gangName)
    }
  })
}

function confirmStartGangEvent (gangName, password) {
  event(confirmStartGangActions(gangName), (action) => {
    if (action.confirm == 'yes')
      console.log('starting gang!')
    } else {
      return require('./init')()
    }
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
