import React from "react";

import Button from "../components/Button";

const Controls = () => {
  const handleClick = () => {};

  return (
    <div>
      <Button handleClick={handleClick} id="start_stop">
        Start Stop
      </Button>
      <Button handleClick={handleClick} id="reset">
        Reset
      </Button>
    </div>
  );
};

export default Controls;
