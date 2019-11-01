import React from "react";
import { connect } from "react-redux";
import { startTimer, stopTimer, updateTimer, resetTimer } from "../actions";

import accurateInterval from "accurate-interval";

import Button from "../components/Button";

let timerInterval;

const Controls = ({ isOn, startTimer, stopTimer, resetTimer, updateTimer }) => {
  const handleStartStopClick = () => {
    if (isOn && timerInterval) {
      stopTimer();
      timerInterval.clear();
    } else {
      startTimer();
      timerInterval = accurateInterval(updateTimer, 1000);
    }
  };

  const handleResetClick = () => {
    if (timerInterval) {
      timerInterval.clear();
      resetTimer();
    }
  };

  return (
    <div>
      <Button handleClick={handleStartStopClick} id="start_stop">
        {isOn ? "Stop" : "Start"}
      </Button>
      <Button handleClick={handleResetClick} id="reset">
        Reset
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isOn: state.timer.isOn
  };
};

export default connect(
  mapStateToProps,
  { startTimer, stopTimer, updateTimer, resetTimer }
)(Controls);
