import React from "react";
import Quote from "./Quote";
import NewButton from "./NewButton";
import TweetButton from "./TweetButton";

const Container = ({ quote, setRandomQuote }) => {
  return (
    <main id="quote-box">
      <Quote quote={quote} />
      <div className="button-container">
        <TweetButton />
        <NewButton setRandomQuote={setRandomQuote} />
      </div>
    </main>
  );
};

export default Container;
