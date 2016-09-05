var event = require('../flow/event')
var extendedEvent = require('../flow/extended-event')
var clear = require('../flow/clear')
var actions = require('../actions/menu')

var welcomeFlag = () => {
	console.log(`† ${socket.gangName.toUpperCase()} †`)
  console.log('----------------')
}

function initEvent (gang) {
  clear()
  welcomeFlag()
  extendedEvent(actions.init(), (action) => {
		if (action.choice == "gang") return require('../flow/exit')()
		if (action.choice == "market") return require('../flow/exit')()
		if (action.choice == "stock") return require('../flow/exit')()
		if (action.choice == "exit") return require('../flow/exit')()
  })
}

module.exports = function () {
  initEvent()
}
