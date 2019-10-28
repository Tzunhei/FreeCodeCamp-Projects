import React from "react";
import { connect } from "react-redux";
import { startStopTimer, resetTimer } from "../actions";

import Button from "../components/Button";

const Controls = () => {
  const handleStartStopClick = () => {};

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
  { startStopTimer, resetTimer }
)(Controls);
