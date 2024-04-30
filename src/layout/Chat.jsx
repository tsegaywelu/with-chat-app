import React, { useEffect, useState,useContext ,} from "react";
import { useNavigate } from "react-router-dom";
import Socket from "socket.io-client";
import "./chat.css";
import { UserTypeContext } from "../components/contextprovider/Usertype";

const Chat = () => {
  //here user or admin must login to chat 
 
  const {userType} = useContext(UserTypeContext)

 
  console.log(userType);
  const [messages, setMessages] = useState([{ text: "welcome", type: userType.userType }]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const mytime = new Date().toLocaleTimeString();

  useEffect(() => {
    const s = Socket.connect("http://localhost:3000");

    s.on("message", (data) => {
      //this is reciving
      console.log("your type is "+data.type);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.text, type: data.type }, //i am reciving the message i have sent to back-end and displaying as a user on body
      ]);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // i am sending this to the backend
    if (socket) {
      socket.emit("message", { text: message, type: userType.userType,sender:userType.username ,
        senderemail:userType.useremail
        });
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
              {mytime}
            </p>
          </div>
        ))}
        {/*  i will display the below div to center */}
        <div className="flex flex-col items-center justify-center gap-6 ">
          <input
            type="text"
            value={message}
            className="p-4 rounded-md w-1/3 "
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type your message here"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            className="bg-blue-900 p-4 rounded-md w-1/3 flex justify-center items-center"
            onClick={sendMessage}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
