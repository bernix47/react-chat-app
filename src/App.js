import React, { useState, useEffect } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";
import HeaderBar from "./components/HeaderBar";
import TextBox from "./components/TextBox";

function App() {
  const [messages, setMessages] = useState(() => {
    // get the todos from localstorage
    const getMessages = localStorage.getItem("messages");
    //Check if there is any previous stored messages
    if (getMessages) {
      return JSON.parse(getMessages);
    } else {
      return [];
    }
  });

  const addMessage = (message) => {
    let messageObj = {
      id: Math.random(),
      text: message,
    };
    setMessages([...messages, messageObj]);
    console.log(messages);
  };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="App">
      <HeaderBar />
      <ChatWindow messages={messages} />
      <TextBox onSubmit={(message) => addMessage(message)} />
    </div>
  );
}

export default App;
