import React from "react";
import { connect } from "react-redux";

import { formatNumber } from "../utils";

const Timer = ({ timeLeft }) => {
  const minutes = formatNumber(Math.floor(timeLeft / 60));
  const seconds = formatNumber(timeLeft % 60);
  const time = `${minutes}:${seconds}`;

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <p id="time-left">{time}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft
  };
};

export default connect(mapStateToProps)(Timer);
