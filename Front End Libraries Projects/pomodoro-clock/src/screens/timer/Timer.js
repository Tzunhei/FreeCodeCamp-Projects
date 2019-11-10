import React from "react";

import Title from "./Title";
import Configuration from "./Configuration";
import Clock from "./Clock";
import Controls from "./Controls";

const Timer = () => {
  return (
    <div>
      <Title />
      <Configuration />
      <Clock />
      <Controls />
    </div>
  );
};

export default Timer;
