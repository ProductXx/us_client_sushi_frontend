import React from "react";
import "./loading.modules.css";
const Loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div class="loading ">
        <span class="loading__word">L</span>
        <span class="loading__word">O</span>
        <span class="loading__word">A</span>
        <span class="loading__word">D</span>
        <span class="loading__word">I</span>
        <span class="loading__word">N</span>
        <span class="loading__word">G</span>
      </div>
    </div>
  );
};

export default Loading;
