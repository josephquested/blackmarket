var inquirer = require('inquirer')
var clear = require('./clear')

module.exports = function (actions, cb) {
  clear()
  inquirer.prompt(actions).then(function(res) {
    cb(res)
  })
}
