import React from "react";
import { connect } from "react-redux";

import { formatNumber } from "../utils";
import { changeMode } from "../actions";
import { BREAK, SESSION } from "../constants";

const Timer = ({ mode, timeLeft, changeMode }) => {
  if (timeLeft < 0) {
    mode === SESSION ? changeMode(BREAK) : changeMode(SESSION);
  }
  const time = timeLeft;
  const minutes = formatNumber(Math.floor(time / 60000));
  const seconds = formatNumber(Math.floor((time % 60000) / 1000));
  const timer = `${minutes}:${seconds}`;
  return (
    <div>
      <h4 id="timer-label">{mode === "SESSION" ? "Session" : "Break"}</h4>
      <p id="time-left">{timer}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.timer.mode,
    timeLeft: state.timer.timeLeft
  };
};

export default connect(
  mapStateToProps,
  { changeMode }
)(Timer);
