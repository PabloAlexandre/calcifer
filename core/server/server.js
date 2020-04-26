const http = require('http').createServer();
const io = require('socket.io')(http);

const { handleConnection } = require('./src');

io.on('connection', handleConnection);

http.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});