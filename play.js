const { connect } = require("./client.js");
const { setupInput } = require('./input');

console.log(connect);
console.log("Connecting ...");

const conn = connect();
setupInput(conn);
console.log(setupInput);
