"use client";
import React, { useContext } from "react";
import "./Main.css";
import { assests } from "../../assets/assest";
import { Context } from "../../context/context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assests.profile} alt="" className="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an uncoming road trip </p>
                <img src={assests.compass} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planing</p>
                <img src={assests.idea} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activites for our work retreat</p>
                <img src={assests.comment} alt="" />
              </div>
              <div className="card">
                <p>Improve the readebility of the following code</p>
                <img src={assests.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assests.profile} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assests.star} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                  {/* {resultData} */}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assests.photo} alt="" />
              <img src={assests.mic} alt="" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assests.communication}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacurrate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
