var inquirer = require('inquirer')
var clear = require('./clear')

var actions = [
  {
    type: 'list',
    name: 'hasAccount',
    message: 'do you have an account?',
    choices: ['yes', 'no']
  }
]

module.exports = function () {
  clear()
  inquirer.prompt(actions).then(function(res) {
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
