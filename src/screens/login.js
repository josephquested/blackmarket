var event = require('../flow/event')

var initActions = () => {
  return [{
    type: 'input',
    name: 'name',
    message: 'gang:'
  }]
}

var gangDoesntExistActions = (gangName) => {
  return [{
    type: 'list',
    name: 'choice',
    message: `the ${gangName} gang doesn't exist yet`,
    choices: [`start the ${gangName} gang`, 'go back']
  }]
}

var incorrectPasswordActions = () => {
  return [{
    type: 'list',
    name: 'choice',
    message: `† INCORRECT PASSWORD †`,
    choices: [`try again`, 'go back']
  }]
}

var passwordActions = () => {
  return [{
    type: 'password',
    message: 'password',
    name: 'password'
  }]
}

function initEvent () {
  event(initActions(), (action) => {
    if (action.name == '') return initEvent()
    socket.doesGangExist('gangs', action.name)
    socket.on('doesGangExistResponse', function (res) {
      if (res) return passwordEvent(action.name)
      return gangDoesntExistEvent(action.name)
    })
  })
}

function passwordEvent (name) {
  event(passwordActions(), (action) => {
    socket.isPasswordValid(name, action.password)
    socket.on('isPasswordValidResponse', (res) => {
      if (res) {
        socket.setGangName(name)
        return require('./menu')()
      } else {
        return incorrectPasswordEvent(name)
      }
    })
  })
}

function incorrectPasswordEvent (name) {
  event(incorrectPasswordActions(), (action) => {
    if (action.choice == 'go back') return initEvent()
    return passwordEvent(name)
  })
}

function gangDoesntExistEvent (gangName) {
  event(gangDoesntExistActions(gangName), (action) => {
    if (action.choice == 'go back') return initEvent()
    return require('./start-gang')(gangName)
  })
}

module.exports = function () {
  initEvent()
}
