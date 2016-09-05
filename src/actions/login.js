module.exports = {
  init: function () {
    return [{
      type: 'input',
      name: 'name',
      message: 'gang:'
    }]
  },

  gangDoesntExist: function (gangName) {
    return [{
      type: 'list',
      name: 'choice',
      message: `the ${gangName} gang doesn't exist yet`,
      choices: [`start the ${gangName} gang`, 'go back']
    }]
  },

  incorrectPassword: function () {
    return [{
      type: 'list',
      name: 'choice',
      message: `† INCORRECT PASSWORD †`,
      choices: [`try again`, 'go back']
    }]
  },

  password: function () {
    return [{
      type: 'password',
      message: 'password',
      name: 'password'
    }]
  }
}
