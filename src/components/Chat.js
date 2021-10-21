import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import db from "./firebase";
import firebase from "@firebase/app-compat";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(channelId){
        db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [channelId]);

  const sendMessages = (e) => {
      e.preventDefault(); // This will prevent our page from reloading when we will send the form(message)

      db.collection("channels").doc(channelId).collection("messages").add({
          message: input,
          user: user,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setInput("");
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message 
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="medium" />
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button className="chat__inputButton" type="submit" onClick={sendMessages} >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="medium" />
          <GifIcon fontSize="medium" />
          <EmojiEmotionsIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
