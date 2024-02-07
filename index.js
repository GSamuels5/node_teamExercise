// Task_1_Zukisa_Maza
const http = require('http');
const dataProcessor = require('./data/dataProcessor');

// Creating an HTTP server
const server = http.createServer((req, res) => {
    let processedData = dataProcessor.process('Sample data');
    res.end(processedData);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running @ http://127.0.0.1:${port}/`);
});

