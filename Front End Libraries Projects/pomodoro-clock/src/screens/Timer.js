import React from "react";
import { connect } from "react-redux";

const Timer = ({ timeLeft }) => {
  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <p id="time-left">{timeLeft}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft
  };
};

export default connect(mapStateToProps)(Timer);
