const path = require("path");
const publicPath = path.join(__dirname, "../public");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

if(!module.parent) {
  app.listen(port, () => {
    console.log(`Server started listenning to port: ${port}`);
  });
}



