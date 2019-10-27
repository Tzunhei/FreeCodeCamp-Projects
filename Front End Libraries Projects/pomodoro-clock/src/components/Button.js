import React from "react";

const Button = ({ handleClick, id, children }) => {
  return (
    <button onClick={handleClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
