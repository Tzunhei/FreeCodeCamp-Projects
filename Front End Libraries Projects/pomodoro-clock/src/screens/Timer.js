import React from "react";
import { connect } from "react-redux";

import { formatNumber } from "../utils";
import { updateTimer } from "../actions";

const Timer = ({ timeLeft }) => {
  const time = timeLeft;
  const minutes = formatNumber(Math.floor(time / 60000));
  const seconds = formatNumber(Math.floor((time % 60000) / 1000));
  const timer = `${minutes}:${seconds}`;
  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <p id="time-left">{timer}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft
  };
};

export default connect(
  mapStateToProps,
  { updateTimer }
)(Timer);
