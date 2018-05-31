const path = require("path");
const publicPath = path.join(__dirname, "../public");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const {createMessage} = require("./utilities/message");

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

//Regsiter an EventListener and do something when the event takes place.

io.on("connection", (socket) => {
  console.log("Connected to client.");

  socket.emit("welcomeMessage",createMessage("Admin", "Welcome to Chatroom"));

  socket.broadcast.emit("newUserNotification", createMessage("Admin", "New user joined in chatroom"));

  socket.on("createMessage", (message, onReceive) => {
    console.log(`New created by client client on: ${new Date()}`);
    console.log(message);

    io.emit("newMessage", createMessage(message.from,message.text
    ));
    onReceive("Got it: Server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from client");
  });
});

if(!module.parent) {
  server.listen(port, () => {
    console.log(`Server started listenning to port: ${port}`);
  });
}



