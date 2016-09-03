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
  event(initActions(), (action) => {
    if (action.choice == 'yes') {
      require('./login')()
    } else {
      require('../flow/exit')()
    }
  })
}
