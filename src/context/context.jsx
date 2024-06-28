import { createContext, useState } from "react";
import runX from "../config/gemini";

export const Context = createContext();

const [input, setInput] = useState("");
const [recentPrompt, setRecentPrompt] = useState("");
const [prevPrompts, setPrevPrompts] = useState([]);
const [showResult, setShowResult] = useState(false);
const [loading, setLoading] = useState(false);
const [resultData, setResultData] = useState("");
const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await runX(prompt);
  };

  //   onSent("what is react js");
  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
