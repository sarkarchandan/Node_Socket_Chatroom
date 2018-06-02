const moment = require("moment");

const createMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};


const createLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
}



module.exports = {
  createMessage,
  createLocationMessage
}