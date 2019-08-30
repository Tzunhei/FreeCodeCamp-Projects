import React from "react";

const Quote = ({quote}) => {
  const quoteText = quote.quote;
  const author = quote.author;
  return (
    <div className="quote-container">
      <p id="text">{quoteText}</p>
      <p id="author">{author}</p>
    </div>
  );
};

export default Quote;
