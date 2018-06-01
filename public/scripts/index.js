//We use one of the available methods to initiate the client request to open a Web Socket and keep the connection open. This variable we need to send and listen data to and from the server.
const socket = io();
//Handling connection with the server.

socket.on("connect", function () {
  console.log("Connected to server.");
});

socket.on("welcomeMessage", function (welcomeMessage) {
  console.log(`${welcomeMessage.text}: ${welcomeMessage.from}`);
});

socket.on("newUserNotification", function(newUserMessage) {
  console.log(newUserMessage);
});

socket.on("newMessage", function(newMessage) {
  console.log("New Message received from server");
  const li = jQuery("<li></li>");
  li.text(`${newMessage.from} : ${newMessage.text}`);

  jQuery("#messages").append(li);
});

socket.on("newLocationMessage", function(locationMessage) {
  const li = jQuery("<li></li>");
  const link = jQuery("<a target='_blank'>My Current Location</a>")
  li.text(`${locationMessage.from}: `);
  link.attr("href", locationMessage.url);
  li.append(link);
  jQuery("#messages").append(li);
});

socket.on("disconnect", function () {
  console.log("Disconnected from server.");
});

jQuery("#message_form").on("submit", function(event) {
  event.preventDefault();
  socket.emit("createMessage", {
    from: jQuery("[name=user]").val(),
    text: jQuery("[name=message]").val()
  }, function(response) {
    console.log(response);
  });
});

const locationButton = jQuery("#send-location");
locationButton.on("click", function() {
  if(!navigator.geolocation) {
    return alert("GeoLocation not supported by this browser.");
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    socket.emit("createLocationMessage", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    alert("Unable to get the location.");
  });
});

