import React from "react";
import "./Timer.css";

import Title from "./Title";
import Configuration from "./Configuration";
import Clock from "./Clock";
import Controls from "./Controls";

const Timer = () => {
  return (
    <div className="timer-container">
      <div className="clock-container">
        <Clock />
        <Controls />
      </div>
      <Configuration />
    </div>
  );
};

export default Timer;
