const http = require('http');
const PORT = 8080;``

const handleRequest = (request, response) => {
    response.end(`It Works!! Path Hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
