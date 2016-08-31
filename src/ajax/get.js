var request = require('superagent')

module.exports = function (geturl, callback) {
	request
		.get(geturl)
		.end((err, res) => {
			callback(err, res.body)
    }
  )
}
