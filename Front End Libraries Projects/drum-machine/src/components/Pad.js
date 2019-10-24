import React from "react";

const Pad = props => {
  return (
    <button className="drum-pad" onClick={props.handleClick}>
      <audio className="clip" src={props.sound} id={props.children}></audio>
      {props.children}
    </button>
  );
};

export default Pad;