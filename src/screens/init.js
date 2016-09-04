var event = require('../flow/event')

var initActions = () => {
  return [{
    type: 'list',
    name: 'choice',
    message: 'are you coming in?',
    choices: ['yes', 'no']
  }]
}

module.exports = function () {
  require('../socket/socket-init')(() => {
    event(initActions(), (action) => {
      if (action.choice == 'yes') return require('./login')()
      return require('../flow/exit')()
    })
  })
}
