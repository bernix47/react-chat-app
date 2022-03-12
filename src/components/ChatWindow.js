import React, { useRef, useEffect } from "react";

export default function ChatWindow({ messages }) {
  //! useRef to get the current element rendered
  //! and scrolling out view to its location in viewport
  const messageEl = useRef(null);

  const scrollToBottom = () => {
    //! To handle initial null condition before rendering
    if (!messageEl.current) return;
    messageEl.current.scrollIntoView({ behaviour: "smooth" });
  };

  //! To handle the execute the above function when our components mounts everytime
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chatwindow overflow-x-hidden container-sm">
      {messages.length!==0 ? messages.map((message) => {
        return (
          <div key={message.id} ref={messageEl}>
            <div className="message" id="user">
              <div className="message-username">User</div>
              <div className="message-text">{message.text}</div>
            </div>
            <div className="message" id="amberBot">
              <div className="message-username">Amber</div>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        );
      }) : (<p className="initial-text">Welcome! How may I help you?</p>)}
    </div>
  );
}
