const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
};

fs.writeFile('hello-world.txt', 'Hello to this great world', function (err) {
    if (err) throw err;
    console.log('File Created!');
});

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});