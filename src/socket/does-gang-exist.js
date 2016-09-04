module.exports = function (table, name) {
  socket.emit('doesGangExist', { table: table, name: name })
}
