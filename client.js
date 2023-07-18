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

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };