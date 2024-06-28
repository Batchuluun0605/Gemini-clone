import React, { useState } from "react";
import { assests } from "../../assets/assest";
import "./Sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assests.menu}
          alt=""
          className="menu"
        />
        <div className="new-chat">
          <img src={assests.plus} alt="" className="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assests.comment} alt="" className="" />
              <p>what is react ...</p>
            </div>
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
