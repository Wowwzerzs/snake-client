const { connect } = require("./client.js");
const { setupInput } = require('./input');

console.log(connect);
console.log("Connecting ...");
connect();
console.log(setupInput);
setupInput();