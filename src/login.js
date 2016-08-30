var event = require('./event')

var actions = [
  {
    type: 'list',
    name: 'hasAccount',
    message: 'do you have an account?',
    choices: ['yes', 'no']
  }
]

module.exports = function () {
  event(actions, (res) => {
    if (res.hasAccount == "yes") {
       existingUser()
     } else {
       newUser()
     }
  })

  function existingUser () {
    console.log("then log in")
  }

  function newUser () {
    console.log("better get one")
  }
}
