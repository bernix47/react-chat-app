import React from "react";

function HeaderBar() {
  return (
    <>
      <div className="headerbar container">
        <div className="botimg">
          <img
            id="botImg"
            src="https://www.infeedo.ai/hubfs/Comp-7size.gif"
            alt="ChatBot"
          />
        </div>
        <div className="botName">
          <h2 id="botName">Amber</h2>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
