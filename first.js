const http = require('http');

const fun = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello there I am a Server</h1>');
};

const server = http.createServer(fun);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
