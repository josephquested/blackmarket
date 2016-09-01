var request = require('superagent')

module.exports = function (posturl, data, callback) {
	request
		.post(posturl)
		.send(data)
		.set('Accept', 'application/json')
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
