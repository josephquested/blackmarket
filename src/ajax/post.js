var request = require('superagent')

module.exports = function (url, data, callback) {
	request
		.post(url)
		.send(data)
		.end((err, res) => {
			if (err) return require('./error')()
			callback(res.body)
		}
  )
}
