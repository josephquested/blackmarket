var event = require('../flow/event')
var actions = require('../actions/init')

module.exports = function () {
  require('../socket/socket-init')(() => {
    event(actions.init(), (action) => {
      if (action.choice == 'yes') return require('./login')()
      return require('../flow/exit')()
    })
  })
}
