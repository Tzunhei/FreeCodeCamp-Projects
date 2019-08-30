import React from "react";

const NewButton = ({ setRandomQuote }) => {
  return (
    <button id="new-quote" onClick={setRandomQuote}>
      New Quote
    </button>
  );
};

export default NewButton;
