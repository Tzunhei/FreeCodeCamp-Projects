import React from "react";
import { connect } from "react-redux";
import { playSound } from "../actions";

import _ from "lodash";

import Pad from "../components/Pad";
import "./PadsContainer.css";

class PadsContainer extends React.Component {
  handleClick = e => {
    const audio = e.target.children[0];
    audio.volume = this.props.volume / 100;
    audio.play();
    this.props.playSound(e.target.innerText);
  };

  handleKeyDown = e => {
    const sound = _.values(this.props.sounds).filter(
      sound => sound.keyCode === e.keyCode
    );
    if (sound.length === 0) {
      return null;
    }
    this.props.playSound(sound[0].id);
    const playKey = new Audio(sound[0].src);
    playKey.play();
  };

  UNSAFE_componentWillMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
  };

  render() {
    return (
      <div className="pads-container">
        {_.values(this.props.sounds).map((sound, index) => {
          return (
            <Pad
              key={`key-${index}`}
              sound={sound.src}
              handleClick={this.handleClick}
            >
              {sound.id}
            </Pad>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    volume: state.volume,
    sounds: state.sounds.sounds_A
  };
};

export default connect(
  mapStateToProps,
  { playSound }
)(PadsContainer);
