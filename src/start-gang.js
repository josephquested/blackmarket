var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = [
  {
    type: 'input',
    name: 'password',
    message: 'what is the password for your new gang'
  }
]

function initEvent (gangName) {
  initActions[0].message = `what is the password for ${gangName}`
  event(initActions, (action) => {
    if (action.name == '') return initEvent()
    ajax.get('http://localhost:3000/gangs/' + action.name, (err, gang) => {
      if (err) return () => { console.log('error logging in!', err) }
      if (gang) {
        passwordEvent(gang)
      } else {
        gangDoesntExistEvent(action.name)
      }
    })
  })
}

module.exports = function (gangName) {
  initEvent(gangName)
}
