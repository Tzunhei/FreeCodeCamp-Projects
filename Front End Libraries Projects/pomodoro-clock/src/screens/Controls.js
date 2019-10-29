import React from "react";
import { connect } from "react-redux";
import { startStopTimer, updateTimer, resetTimer } from "../actions";

import accurateInterval from "accurate-interval";

import Button from "../components/Button";

const Controls = ({ isRunning, startStopTimer, updateTimer }) => {
  const handleStartStopClick = () => {
    startStopTimer();
    let timerInterval;
    isRunning
      ? clearInterval(timerInterval)
      : (timerInterval = accurateInterval(updateTimer, 1000));
  };

  const handleResetClick = () => {};

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
  { startStopTimer, updateTimer, resetTimer }
)(Controls);
