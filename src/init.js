var event = require('./event')

var actions = [
  {
    type: 'list',
    name: 'login',
    message: 'are you coming in?',
    choices: ['yes', 'no']
  }
]

module.exports = function () {
  event(actions, (res) => {
    if (res.login == "yes") {
      require('./login')()
    } else {
      require('./exit')()
    }
  })
}