import React from "react";
import { connect } from "react-redux";
import { startTimer, stopTimer, updateTimer, resetTimer } from "../actions";

import accurateInterval from "accurate-interval";

import Button from "../components/Button";

let timerInterval;

const Controls = ({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
  updateTimer
}) => {
  const handleStartStopClick = () => {
    if (isRunning) {
      stopTimer();
      timerInterval.clear();
    } else {
      startTimer();
      timerInterval = accurateInterval(updateTimer, 1000);
    }
  };

  const handleResetClick = () => {
    timerInterval.clear();
    resetTimer();
  };

  return (
    <div>
      <Button handleClick={handleStartStopClick} id="start_stop">
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button handleClick={handleResetClick} id="reset">
        Reset
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isRunning: state.timer.isRunning
  };
};

export default connect(
  mapStateToProps,
  { startTimer, stopTimer, updateTimer, resetTimer }
)(Controls);
