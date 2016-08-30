var event = require('./event')

var initActions = [
  {
    type: 'list',
    name: 'hasAccount',
    message: 'do you have an account?',
    choices: ['yes', 'no']
  }
]

var existingActions = [
  {
    type: 'input',
    name: 'gangName',
    message: 'gang name:'
  },
  {
    type: 'password',
    message: 'password',
    name: 'password'
  }
]

module.exports = function () {
  event(initActions, (res) => {
    if (res.hasAccount == "yes") {
       existingUser()
     } else {
       newUser()
     }
  })

  function existingUser () {
    event(existingActions, (res) => {
      console.log(res)
    })
  }

  function newUser () {
    console.log("better get one")
  }
}
