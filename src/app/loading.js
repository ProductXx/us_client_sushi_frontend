import React from "react";
import "./loading.modules.css";
const Loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="loading ">
        <span className="loading__word">L</span>
        <span className="loading__word">O</span>
        <span className="loading__word">A</span>
        <span className="loading__word">D</span>
        <span className="loading__word">I</span>
        <span className="loading__word">N</span>
        <span className="loading__word">G</span>
      </div>
    </div>
  );
};

export default Loading;
