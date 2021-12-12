const server = require('./src/tcp');
const config = require('./config.json');

server.listen(config.listenPort || 1965);
console.log("Listening on port " + (config.listenPort || 1965));