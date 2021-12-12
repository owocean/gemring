const config = require('../config.json');
const fs = require('fs');
const path = require('path');

function serveStatic(sock, args) {
    const dir = fs.readdirSync(config.staticFilesDir);
    if (args[0] == "" && dir.includes('index.gmi')) {
        const contents = fs.readFileSync(path.join(config.staticFilesDir, 'index.gmi'));
        sock.write('20 text/gemini\r\n');
        sock.write(contents);
    } else if (args[0].includes('.gmi') && dir.includes(args[0])) {
        const contents = fs.readFileSync(path.join(config.staticFilesDir, args[0]));
        sock.write('20 text/gemini\r\n');
        sock.write(contents);
    } else if (args[0] == "" && !dir.includes('index.gmi')) {
        sock.write('20 text/gemini\r\n');
        sock.write('# Indexed files\n\n');
        dir.forEach((file) => {
            sock.write('=> '+file+'\n');
        });
    } else {
        sock.write('51 Not Found\r\n');
    }
}

module.exports = serveStatic;