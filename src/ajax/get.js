var request = require('superagent')

module.exports = function (url, callback) {
	request
		.get(url)
		.end((err, res) => {
			if (err) return require('./error')()
			callback(res.body)
		}
	)
}
