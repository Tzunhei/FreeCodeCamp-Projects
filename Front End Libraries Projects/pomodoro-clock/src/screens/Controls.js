import React from "react";
import { connect } from "react-redux";
import { startStopTimer, updateTimer, resetTimer } from "../actions";

import accurateInterval from "accurate-interval";

import Button from "../components/Button";

const Controls = ({ startStopTimer, updateTimer }) => {
  const handleStartStopClick = () => {
    startStopTimer();
    accurateInterval(updateTimer, 1000);
  };

  const handleResetClick = () => {};

  return (
    <div>
      <Button handleClick={handleStartStopClick} id="start_stop">
        Start Stop
      </Button>
      <Button handleClick={handleResetClick} id="reset">
        Reset
      </Button>
    </div>
  );
};

export default connect(
  null,
  { startStopTimer, updateTimer, resetTimer }
)(Controls);
