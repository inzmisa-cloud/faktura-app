const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const FILE = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end();
  fs.readFile(FILE, 'utf-8', (err, data) => {
    if (err) { res.writeHead(500); return res.end('Server error'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Faktura app: http://localhost:${PORT}`);
});
