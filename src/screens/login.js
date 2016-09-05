var event = require('../flow/event')
var actions = require('../actions/login')

function initEvent () {
  event(actions.init(), (action) => {
    if (action.name == '') return initEvent()
    action.name = action.name.toLowerCase()
    socket.doesGangExist('gangs', action.name)
    socket.once('doesGangExistResponse', function (res) {
      if (res) return passwordEvent(action.name)
      return gangDoesntExistEvent(action.name)
    })
  })
}

function passwordEvent (name) {
  event(actions.password(), (action) => {
    socket.isPasswordValid(name, action.password)
    socket.once('isPasswordValidResponse', (res) => {
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
  event(actions.incorrectPassword(), (action) => {
    if (action.choice == 'go back') return initEvent()
    return passwordEvent(name)
  })
}

function gangDoesntExistEvent (gangName) {
  event(actions.gangDoesntExist(gangName), (action) => {
    if (action.choice == 'go back') return initEvent()
    return require('./start-gang')(gangName)
  })
}

module.exports = function () {
  initEvent()
}
