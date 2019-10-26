import React from "react";
import Display from "./Display";
import PadsContainer from "./PadsContainer";

import "./DrumContainer.css";

export default function DrumContainer() {
  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <p>With React & Redux</p>
      <Display />
      <PadsContainer />
      <p>@Design By Clement Yam</p>
    </div>
  );
}
