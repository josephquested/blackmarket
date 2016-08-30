module.exports = function () {
  clear()
  banner()
}

function clear () {
  return process.stdout.write('\033c');
}

function banner () {
  console.log("----------------")
  console.log("† BLACK MARKET †")
  console.log("----------------")
}
