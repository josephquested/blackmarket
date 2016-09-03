var event = require('../flow/event')
var extendedEvent = require('../flow/extended-event')
var ajax = require('../ajax/ajax')
var clear = require('../flow/clear')

var gangName = ''

var welcomeFlag = () => {
  name = gangName.toUpperCase()
	console.log(`† ${name} †`)
  console.log('----------------')
}

var initActions = (name) => {
  return [{
    type: 'list',
    name: 'choice',
    message: ' ',
    choices: ['gang', 'market', 'stock', 'exit']
  }]
}

function initEvent (gang) {
  clear()
  welcomeFlag()
  extendedEvent(initActions(), (action) => {
    console.log(action.choice)
  })
}

module.exports = function (name) {
  gangName = name
  initEvent()
}
