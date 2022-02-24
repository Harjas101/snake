const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("server says : ", data);
    //conn.write("Move: up")
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to the game server");
    conn.write("Name: HSA");
    //conn.write("Move: up")
  //   conn.write("Move: up");
  //  setTimeout(() =>{
  //   conn.write("Move: left")
  //  }, 500)
  
  //  setInterval(() => {
  //   conn.write("Move: up")
  //  }, 3000);

   });
  
  // conn.on("connect", () => {
  //   conn.write("Name: HSA")
  // });
  //conn.setEncoding("utf8");

  return conn;
};
module.exports = connect;
