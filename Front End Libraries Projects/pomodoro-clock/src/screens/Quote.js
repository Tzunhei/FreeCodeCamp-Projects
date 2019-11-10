import React from "react";
import { connect } from "react-redux";

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
        <blockquote>
          <p>{this.displayRandomQuote()}</p>
          <footer></footer>
        </blockquote>
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
