var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = [
  {
    type: 'input',
    name: 'gang',
    message: 'gang:'
  }
]

module.exports = function () {
  event(initActions, (res) => {
    ajax.get('http://localhost:3000/gangs', (err, res) => {
      if (err) console.log('error logging in!', err)
      else console.log(res)
    })
  })
}

// {
//   type: 'password',
//   message: 'password',
//   name: 'password'
// }
