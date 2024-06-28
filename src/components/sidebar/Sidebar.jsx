import React, { useContext, useState } from "react";
import { assests } from "../../assets/assest";
import "./Sidebar.css";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompts, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    // setRecentPrompts(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assests.menu}
          alt=""
          className="menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assests.plus} alt="" className="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img src={assests.comment} alt="" className="" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assests.question} alt="" className="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assests.history} alt="" className="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assests.gear} alt="" className="" />
          {extended ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
