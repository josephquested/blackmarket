var event = require('./event')
var ajax = require('./ajax/ajax')

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
    console.log(action)
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
