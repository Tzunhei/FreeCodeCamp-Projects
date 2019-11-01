import React from "react";
import { connect } from "react-redux";

import { setConfiguration } from "../actions";
import ConfigSection from "../components/ConfigSection";
import { convertToMs } from "../utils";

const Configuration = ({
  breakLength,
  sessionLength,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
}) => {
  const handleIncrementBreak = e => {
    if (breakLength < 60) {
      incrementBreak();
    }
  };

  const handleDecrementBreak = e => {
    if (breakLength > 1) {
      decrementBreak();
    }
  };

  const handleIncrementSession = e => {
    if (sessionLength < 60 * 60 * 1000) {
      incrementSession();
    }
  };

  const handleDecrementSession = e => {
    if (sessionLength > 1 * 60 * 1000) {
      decrementSession();
    }
  };

  const breakMinutes = convertToMs(breakLength);
  const sessionMinutes = convertToMs(sessionLength);

  return (
    <div>
      <ConfigSection
        title={"Break Length"}
        type={"break"}
        value={breakMinutes}
        handleIncrement={handleIncrementBreak}
        handleDecrement={handleDecrementBreak}
      />
      <ConfigSection
        title={"Session Length"}
        type={"session"}
        value={sessionMinutes}
        handleIncrement={handleIncrementSession}
        handleDecrement={handleDecrementSession}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breakLength: state.timer.break,
    sessionLength: state.timer.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementBreak: () => dispatch(setConfiguration("break", 1)),
    decrementBreak: () => dispatch(setConfiguration("break", -1)),
    incrementSession: () => dispatch(setConfiguration("session", +60000)),
    decrementSession: () => dispatch(setConfiguration("session", -60000))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);
