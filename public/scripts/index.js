//We use one of the available methods to initiate the client request to open a Web Socket and keep the connection open. This variable we need to send and listen data to and from the server.
const socket = io();
//Handling connection with the server.

socket.on("connect", function () {
  console.log("Connected to server.");
});

// socket.emit("createMessage", {
//   from: "vic@battle.com",
//   to: "alex@origin.com",
//   text: "Should we play ?"
// });

socket.on("newMessage", function(newMessage) {
  console.log("New Message received from server");
  console.log(newMessage);
})

socket.on("disconnect", function () {
  console.log("Disconnected from server.");
});


