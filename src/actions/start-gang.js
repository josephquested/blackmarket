module.exports = {
  init: function (gangName) {
    return [{
      type: 'password',
      name: 'password',
      message: `what is the password for ${gangName}?`
    }]
  },

  confirmPassword: function () {
    return [{
      type: 'password',
      name: 'password',
      message: 'say it again'
    }]
  },

  confirmStartGang: function (gangName) {
    return [{
      type: 'list',
      name: 'choice',
      message: `are you sure you want to start the ${gangName} gang?`,
      choices: ['yes', 'no']
    }]
  }
}
