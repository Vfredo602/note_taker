const express = require('express');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

// starts the app and creates a port
const app = express();
// const PORT = 8080;
var PORT = process.env.PORT || 3001;

// middleware parsing into json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
// routes
app.use('/api', api);
app.use('/', html);
// const server = http.createServer(handleRequest);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

