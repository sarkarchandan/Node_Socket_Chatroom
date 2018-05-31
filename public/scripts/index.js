//We use one of the available methods to initiate the client request to open a Web Socket and keep the connection open. This variable we need to send and listen data to and from the server.
const socket = io();
//Handling connection with the server.
socket.on("connect", function () {
  console.log("Connected to server.");
});

socket.emit("createEmail",{
  to: "alexander@beard.com",
  text: "Hey Alex"
});

//Handling disconnection from the server.
socket.on("disconnect", function () {
  console.log("Disconnected from server.");
});


socket.on("newEmail", function (email) {
  console.log("New Email Received.");
  console.log(email);
});