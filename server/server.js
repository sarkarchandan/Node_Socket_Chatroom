const path = require("path");
const publicPath = path.join(__dirname, "../public");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

//Regsiter an EventListener and do something when the event takes place.

//Handling connection with the client.
io.on("connection", (socket) => {
  console.log("Connected to client.");

  //Handling disconnection from client.
  socket.on("disconnect", () => {
    console.log("Disconnected from client");
  });
});

if(!module.parent) {
  server.listen(port, () => {
    console.log(`Server started listenning to port: ${port}`);
  });
}



