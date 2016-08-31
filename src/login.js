var event = require('./event')
var ajax = require('./ajax/ajax')

var initActions = [
  {
    type: 'input',
    name: 'name',
    message: 'gang:'
  }
]

module.exports = function () {
  event(initActions, (res) => {
    ajax.get('http://localhost:3000/gangs/' + res.name, (err, res) => {
      if (err) console.log('error logging in!', err)
      else {
        console.log("response from server: ", res)
      }
    })
  })

  //
  // {
  //   type: 'password',
  //   message: 'password',
  //   name: 'password'
  // }
}
