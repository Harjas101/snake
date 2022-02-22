const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost' ,
    port: 50541
  });
conn.on("data" , (data) => {
  console.log("server says : ", data)
})
conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log('Successfully connected to the game server');
});
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();