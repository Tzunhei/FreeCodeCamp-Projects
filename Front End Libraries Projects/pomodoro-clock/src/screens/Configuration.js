import React from "react";
import { connect } from "react-redux";

import { setConfiguration } from "../actions";

import ConfigSection from "../components/ConfigSection";

const Configuration = ({
  breakLength,
  sessionLength,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
}) => {
  const minutes = Math.floor(sessionLength / 60);

  return (
    <div>
      <ConfigSection
        title={"Break Length"}
        type={"break"}
        value={breakLength}
        handleIncrement={incrementBreak}
        handleDecrement={decrementBreak}
      />
      <ConfigSection
        title={"Session Length"}
        type={"session"}
        value={minutes}
        handleIncrement={incrementSession}
        handleDecrement={decrementSession}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    breakLength: state.configuration.break,
    sessionLength: state.configuration.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementBreak: () => dispatch(setConfiguration("break", 1)),
    decrementBreak: () => dispatch(setConfiguration("break", -1)),
    incrementSession: () => dispatch(setConfiguration("session", +60)),
    decrementSession: () => dispatch(setConfiguration("session", -60))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);
