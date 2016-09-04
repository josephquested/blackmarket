module.exports = function (name, password) {
  socket.emit('startGang', { id: socket.id, name: name, password: password })
}
