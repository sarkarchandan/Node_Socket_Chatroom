//Jan 1st 1970 00:00:00 am
const moment = require("moment");


// const date = new Date();
// console.log(`Current Month: ${date.getMonth()}`);

const date = moment();
console.log(date.format("dddd, MMM Do,YYYY h:mm a"));