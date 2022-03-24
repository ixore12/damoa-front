const express = require("express");
const app = express();
const server = require("http").createServer(app);

const port = 4000;

server.listen(port, () => {
  console.log(
    `##### server is running on http://localhost:4000. ${new Date().toLocaleString()} #####`
  );
});