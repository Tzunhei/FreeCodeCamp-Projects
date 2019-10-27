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
  return (
    <div>
      <ConfigSection
        title={"Break Length"}
        type={"break"}
        defaultValue={breakLength}
        handleIncrement={incrementBreak}
        handleDecrement={decrementBreak}
      />
      <ConfigSection
        title={"Session Length"}
        type={"session"}
        defaultValue={sessionLength}
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
    incrementBreak: () => dispatch(setConfiguration("break", +1)),
    decrementBreak: () => dispatch(setConfiguration("break", -1)),
    incrementSession: () => dispatch(setConfiguration("session", +1)),
    decrementSession: () => dispatch(setConfiguration("session", -1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);
