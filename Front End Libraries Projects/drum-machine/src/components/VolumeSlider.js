import React from "react";
import {connect} from "react-redux";
import {setVolume} from "../actions/"

const VolumeSlider = props => {

  const handleChange = e => {
    const volume = e.target.value;
    props.setVolume(volume);
  }
 
  return (
    <div>
      <input type="range" min="1" max="100" onChange={handleChange} value={props.volume} ></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume
  }
}

export default connect(mapStateToProps, {setVolume})(VolumeSlider);