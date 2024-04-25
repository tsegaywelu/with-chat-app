import React, { useEffect, useState } from "react";
import Socket from "socket.io-client";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = Socket.connect("http://localhost:3000");

    s.on("message", (data) => {
      console.log(data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.text, type: "admin" },
      ]);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit("message", { text: message, type: "user" });
      setMessage("");
    }
  };

  return (
    <div>
      <div
        className="py-20 relative flex flex-grow flex-col px-12 justify-end"
        style={{ backgroundColor: "#e5ddd5" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.type === "user"
                ? "ml-auto rounded-lg rounded-tr-none bg-green-300"
                : "mr-auto rounded-lg rounded-tl-none bg-white"
            } my-1 p-2 text-sm flex flex-col relative ${
              msg.type === "user" ? "speech-bubble-right" : "speech-bubble-left"
            }`}
          >
            <p className="">{msg.text}</p>
            <p className="text-gray-600 text-xs text-right leading-none">
              8:00 AM
            </p>
          </div>
        ))}
        <div className="flex justify-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
