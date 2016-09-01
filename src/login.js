var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = [
  {
    type: 'input',
    name: 'name',
    message: 'gang:'
  }
]

var gangDoesntExistActions = [
  {
    type: 'list',
    name: 'choice',
    message: 'what now?',
    choices: ['start the gang', 'go back']
  }
]

var passwordActions = [
  {
    type: 'password',
    message: 'password',
    name: 'password'
  }
]

function initEvent () {
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

function passwordEvent (gang) {
  event(passwordActions, (action) => {
    console.log(action)
  })
}

function gangDoesntExistEvent (gangName) {
  gangDoesntExistActions[0].message = `the ${gangName} gang doesn't exist yet`
  gangDoesntExistActions[0].choices[0] = `start the ${gangName} gang`
  event(gangDoesntExistActions, (action) => {
    if (action.choice == 'go back') {
      return initEvent()
    } else {
      require('./start-gang')(gangName)
    }
  })
}

module.exports = function () {
  initEvent()
}
