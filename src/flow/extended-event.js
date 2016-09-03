var inquirer = require('inquirer')
var clear = require('./clear')

module.exports = function (actions, cb) {
  inquirer.prompt(actions).then((res) => {
    cb(res)
  })
}
