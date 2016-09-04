module.exports = function (name, password) {
  socket.emit('isPasswordValid', { name: name, password: password })
}
