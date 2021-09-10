const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

http.createServer((req,res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) {
                throw err
            }
            res.end(content)
            
        })
    }
}).listen(port, () => console.log(`Server is running.. port: ${port}`));