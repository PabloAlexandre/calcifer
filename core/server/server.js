const http = require('http').createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  
  if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
  }
});

const io = require('socket.io')(http);

const { handleConnection } = require('./src');

io.on('connection', handleConnection);

http.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});