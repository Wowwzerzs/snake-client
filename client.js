const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // First connect callback
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // Second connect callback
  conn.on("connect", () => {
    conn.write("Name: WOW");
    // conn.write("Move: up"); // Send the "Move: up" command to the server
    // setInterval(function () {
    //   conn.write("Move: up");
    // }, 50);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };

// Supported movement commands
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
