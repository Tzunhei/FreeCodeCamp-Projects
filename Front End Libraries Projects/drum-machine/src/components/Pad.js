import React from "react";
import {connect} from "react-redux";

const Pad = props => {
  return (
    <button className="drum-pad" onClick={props.handleClick}>
      <audio className="clip" src={props.sound} id={props.children} volume={props.volume}></audio>
      {props.children}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume
  }
}

export default connect(mapStateToProps, null)(Pad);