const http = require('http');

// create http server
const server = http.createServer((req, res) => {
    console.info('invoked endpoint')

    console.info('setting up content type')
    // set response headers
    res.writeHead(200, {'Content-Type':'text/html'});

    console.info('writing content in h1 tag to render')
    res.write('<h1>Hello World, Node.js and Express Server!</h1>')
    res.end();

    console.info('request completed')
})

// specify the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Node.js Http server is running on port ${port}`)
})