const http = require('http');
const PORT = process.env.PORT || 5500;

const server = http.createServer((req, res) => {
    // Handling a get request
    if(req.method === 'GET') {
        res.write("Hello from node basic server!");
    }

    res.end();
})

server.listen(PORT, '::1',() => {
    console.log(`Server is listning on port: ${PORT}`);
})

/**
 * We can create this server using Express also, which will be eligant
 * and much cleaner than this raw Node format.
 * If we need more controll then we should go with Node insted of express.
 */