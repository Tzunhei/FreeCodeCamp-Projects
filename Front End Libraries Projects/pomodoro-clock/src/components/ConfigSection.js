import React from "react";

import Button from "./Button";

const ConfigSection = ({
  title,
  type,
  value,
  handleIncrement,
  handleDecrement
}) => {
  return (
    <div id={`${type}-label`}>
      <h4>{title}</h4>
      <div className="up-down-btn-container">
        <Button handleClick={handleIncrement} id={`${type}-increment`}>
          Up
        </Button>
        <p id={`${type}-length`}>{value}</p>
        <Button handleClick={handleDecrement} id={`${type}-decrement`}>
          Down
        </Button>
      </div>
    </div>
  );
};

export default ConfigSection;
