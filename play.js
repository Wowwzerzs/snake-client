const { connect } = require("./client.js");
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();
setupInput(conn);


conn.on("newUserJoined", (message) => {
  sendNewUserMessage(message);
});

const sendNewUserMessage = (message) => {
  console.log("New user joined:", message);
};
