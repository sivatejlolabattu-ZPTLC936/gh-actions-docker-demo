const http = require("http");

http.createServer((req, res) => {
  res.end("CI/CD Docker App 🚀");
}).listen(3000);

console.log("Server running on port 3000");