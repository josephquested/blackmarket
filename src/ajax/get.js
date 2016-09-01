var request = require('superagent')

module.exports = function (geturl, callback) {
	request
		.get(geturl)
		.end((err, res) => {
			if (res) callback(err, res.body)
			else {
				console.log('----------------------------------------------')
				console.log('† FATAL ERROR CONNECTING TO THE BLACK MARKET †')
				console.log('----------------------------------------------')
				console.log(err)
			}
    }
  )
}
