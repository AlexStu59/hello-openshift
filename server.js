cat <<EOF > server.js
const http = require('http');

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello OpenShift depuis Alexandre !\\n');
}).listen(PORT);
EOF
