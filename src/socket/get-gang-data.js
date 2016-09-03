module.exports = function (socket, gangId, callback) {
  socket.on('confirmauth', function(id, username, num, callback) {
      var current_player = new Player(username,id, num);
      onDone(current_player);
  })
}
