import React from "react";
import { connect } from "react-redux";

import "./Pad.css";

const Pad = props => {
  return (
    <button
      className="drum-pad"
      onClick={props.handleClick}
      id={props.children}
    >
      <audio
        className="clip"
        src={props.sound}
        id={props.children}
        volume={props.volume}
      ></audio>
      {props.children}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume
  };
};

export default connect(
  mapStateToProps,
  null
)(Pad);
