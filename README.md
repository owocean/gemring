# gemring
A webring master for gemini

## install
```sh
$ git clone https://github.com/owocean/gemring.git
$ cd gemring
$ mv config.json.example config.json
$ mv ring.json.example ring.json
```
Edit `config.json` and `ring.json` accordingly.

## generating tls certs
You need OpenSSL installed. Run the following command:
```sh
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
```
These keys will expire in a year

## serving static home page
Set `staticFilesDir` in `config.json` to the absolute path of your static file directory.  
Any and all `.gmi` files will be indexed/served. `index.gmi` will be chosen if no filename is requested.

## adding the "widget" to your capsule
```gemini
Webring navigation
=> gemini://webringmaster.tld/prev/<your domain name> Prev
=> gemini://webringmaster.tld/rand/<your domain name> ???
=> gemini://webringmaster.tld/next/<your domain name> Next
```

## running gemring
Requires Node.js v16
```sh
$ npm start
# or
$ node index
```