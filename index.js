var inquirer = require('inquirer')
console.clear = require('./src/clear.js')

console.clear()
console.log("† BLACK MARKET †")

var initLogin = [
  {
    type: 'confirm',
    name: 'login',
    message: 'are you coming in?',
  },
]

  inquirer.prompt(initLogin).then(function(answer) {
    if (answer.login) {
      console.log("logging in...")
    } else {
      console.clear()
    }
  })

//   {
//     type: 'confirm',
//     name: 'pizza',
//     message: 'Ok... Do you like pizza?',
//     when: function (answers) {
//       return !likesFood('bacon')(answers);
//     }
//   },
//   {
//     type: 'input',
//     name: 'favorite',
//     message: 'Whew! What is your favorite type of pizza?',
//     when: likesFood('pizza')
//   }
// ];
//
// function likesFood(aFood) {
//   return function (answers) {
//     return answers[aFood];
//   };
// }
