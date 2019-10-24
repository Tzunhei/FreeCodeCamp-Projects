import React from "react";
import { connect } from "react-redux";
import { playSound } from "../actions";

import _ from "lodash";

import Pad from "../components/Pad";

class PadContainer extends React.Component {
  handleClick = e => {
    e.target.children[0].play();
    this.props.playSound(e.target.innerText);
  };

  handleKeyDown = (e) => {
    const sound = _.values(this.props.sounds).filter(sound => sound.keyCode === e.keyCode);
    this.props.playSound(sound[0].id);
    const playKey = new Audio(sound[0].src);
    playKey.play();
  }

  componentWillMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <Pad sound={this.props.sounds.Q.src} handleClick={this.handleClick}>
          Q
        </Pad>
        <Pad sound={this.props.sounds.W.src} handleClick={this.handleClick}>
          W
        </Pad>
        <Pad sound={this.props.sounds.E.src} handleClick={this.handleClick}>
          E
        </Pad>
        <Pad sound={this.props.sounds.A.src} handleClick={this.handleClick}>
          A
        </Pad>
        <Pad sound={this.props.sounds.S.src} handleClick={this.handleClick}>
          S
        </Pad>
        <Pad sound={this.props.sounds.D.src} handleClick={this.handleClick}>
          D
        </Pad>
        <Pad sound={this.props.sounds.Z.src} handleClick={this.handleClick}>
          Z
        </Pad>
        <Pad sound={this.props.sounds.X.src} handleClick={this.handleClick}>
          X
        </Pad>
        <Pad sound={this.props.sounds.C.src} handleClick={this.handleClick}>
          C
        </Pad>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sounds: state.sounds.sounds_A
  };
};

export default connect(
  mapStateToProps,
  { playSound }
)(PadContainer);
