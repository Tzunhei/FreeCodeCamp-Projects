import React from "react";
import { connect } from "react-redux";
import "./Quote.css";

import { fetchQuotes } from "../actions";

class Quote extends React.Component {
  displayRandomQuote = () => {
    const randomIndex =
      Math.floor(Math.random() * this.props.quotes.length) + 1;
    return this.props.quotes[randomIndex].text;
  };

  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    console.log(this.props);
    return (
      this.props.quotes && (
        <div className="quote-container">
          <blockquote>
            <p className="quote-text">" {this.displayRandomQuote()} "</p>
            <footer className="quote-author"></footer>
          </blockquote>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    isLoading: state.quotes.isLoading,
    error: state.quotes.error
  };
};

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(Quote);
