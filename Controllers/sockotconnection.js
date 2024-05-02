/*  const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
    // i will insert this to db messsage
    
    io.emit("message", data);
  });
});
 */
const Insertmessagetodb = require("../models/message");

const socketio = require("socket.io");

function initializeSocket(server) {
  const io = socketio(server, {
    cors: {
      origin: ["http://localhost:5173", "http://192.168.137.114:5173"],
      methods: ["GET", "POST"],
    },
  });
  

  io.on("connection", (socket) => {
    socket.on("message", async (data) => {
     
      // You can insert the message into the database here if needed
      try {
        const savemessage = new Insertmessagetodb({
        message: data.text,
        usertype: data.type,
        sendername: data.sender,
      email: data.senderemail,
      
      })
      await savemessage.save();
    }
      catch (err) {console.log(err);}
      
    
     // console.table(data);
     
      io.emit("message", data);
    });
  });

  return io;
}

module.exports = initializeSocket;
