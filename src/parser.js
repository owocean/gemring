const url = require('url');

function getRoute(sock) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 5000);
        sock.on('data', (data) => {
            const pathname = url.parse(data.toString()).pathname;
            const args = pathname.split("/").slice(1);
            resolve(args);
        });
    });
}

module.exports = getRoute;