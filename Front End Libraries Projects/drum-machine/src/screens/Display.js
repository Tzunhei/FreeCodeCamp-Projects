import React from "react";
import { connect } from "react-redux";

import "./Display.css";

import VolumeSlider from "../components/VolumeSlider";

const Display = props => {
  return (
    <div id="display">
      <p>{props.currentSound}</p>
      <p>Volume: {props.volume}</p>
      <VolumeSlider />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume,
    currentSound: state.sounds.lastSound
  };
};

export default connect(mapStateToProps)(Display);
