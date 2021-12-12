const ring = require('../ring.json');

function rand(sock, args) {
    let r = ring;
    const index = r.indexOf(args[1]);
    if (index !== -1) {
        r.splice(index, 1);
    }
    const site = r[Math.floor(Math.random() * r.length)];
    const url = `gemini://${site}/`;
    sock.write('30 ' + url + '\r\n');
}

function prev(sock, args) {
    let index = ring.indexOf(args[1]);
    if (index == -1) {
        sock.write('51 Not Found\r\n');
    } else {
        if (index == 0) index = ring.length;
    }
    const site = ring[index - 1];
    const url = `gemini://${site}/`;
    sock.write('30 ' + url + '\r\n');
}

function next(sock, args) {
    let index = ring.indexOf(args[1]);
    if (index == -1) {
        sock.write('51 Not Found\r\n');
    } else {
        if (index == ring.length - 1) index = -1;
    }
    const site = ring[index + 1];
    const url = `gemini://${site}/`;
    sock.write('30 ' + url + '\r\n');
}

module.exports = {
    rand, prev, next
}