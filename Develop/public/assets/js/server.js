const http = require('http');
const PORT = 8080;

const handleRequest1 = (request, response) => {
    response.end(`It Works!! Path Hit: ${request.url}`);
};

const server = http.createServer(handleRequest1);

server.listen(PORT1, () => {
    console.log(`Server listening on: http://localhost:${PORT1}`);
});
