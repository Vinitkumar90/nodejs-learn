const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
    return;
  }

  if (req.url === "/animeData") {
    res.end("there is no anime data present");
    return;
  }

  // Handle unhandled endpoints
  res.statusCode = 404;
  res.end("404 - Page Not Found");
});

server.listen(7777);
