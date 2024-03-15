const { readFileSync } = require("fs");
const http = require("http");

const HomePage = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const image = readFileSync("./navbar-app/logo.svg");
const logic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(HomePage);
    res.end();
  }
  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // Style Page
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  }
  // svg
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(image);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }
});
server.listen(5000);
