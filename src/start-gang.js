var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = [
  {
    type: 'password',
    name: 'password',
    message: 'what is the password for *gang?*'
  }
]

var confirmPasswordActions = [
  {
    type: 'password',
    name: 'password',
    message: 'say it again'
  }
]

function initEvent (gangName) {
  initActions[0].message = `what is the password for ${gangName}?`
  event(initActions, (action) => {
    if (action.password == '') return initEvent(gangName)
    return confirmPasswordEvent(action.password)
  })
}

function confirmPasswordEvent (password) {
  event(confirmPasswordActions, (action) => {
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
