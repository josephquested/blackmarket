module.exports = function (table, name) {
  socket.emit('getOneByName', { id: socket.id, table: table, name: name })
}
