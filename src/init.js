var inquirer = require('inquirer')
var clear = require('./clear')

var actions = [
  {
    type: 'list',
    name: 'login',
    message: 'are you coming in?',
    choices: ['yes', 'no']
  }
]

module.exports = function () {
  clear()
  inquirer.prompt(actions).then(function(res) {
    if (res.login == "yes") {
      require('./login')()
    } else {
      clear()
      process.exit()
    }
  })
}
