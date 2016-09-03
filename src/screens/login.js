var event = require('../flow/event')
var ajax = require('../ajax/ajax')

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
    ajax.get(`http://localhost:3000/gangs/${action.name}`, (res) => {
      if (res) return passwordEvent(res)
      return gangDoesntExistEvent(action.name)
    })
  })
}

function passwordEvent (gang) {
  event(passwordActions(), (action) => {
    var loginData = {name: gang.name, password: action.password}
    ajax.post(`http://localhost:3000/login`, loginData, (res) => {
      if (res.valid) {
        // start socket
        require('./menu')(gang.name)
      } else {
        incorrectPasswordEvent(gang)
      }
    })
  })
}

function incorrectPasswordEvent (gang) {
  event(incorrectPasswordActions(), (action) => {
    if (action.choice == 'go back') return initEvent()
    return passwordEvent(gang)
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
