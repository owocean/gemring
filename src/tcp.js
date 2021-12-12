const tls = require('tls');
const fs = require('fs');
const getRoute = require('./parser');
const serveStatic = require('./static');
const redirect = require('./redirect');
const config = require('../config.json');

const options = {
    key: fs.readFileSync(config.tlsKey),
    cert: fs.readFileSync(config.tlsCert)
};

const server = tls.createServer(options, async function (sock) {
    const args = await getRoute(sock);
    switch(args[0]) {
        case "rand":
            redirect.rand(sock, args);
            break;
        case "prev":
            redirect.prev(sock, args);
            break;
        case "next":
            redirect.next(sock, args);
            break;
        default:
            serveStatic(sock, args);
            break;
    }
    sock.end();
});

module.exports = server;