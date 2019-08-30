import React from "react";
import Axios from "axios";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    data: [],
    quote: ""
  };

  setRandomQuote = () => {
    const index = Math.floor(Math.random() * (this.state.data.length - 1)) + 1;
    console.log(index);
    console.log(this.state.data[101]);
    this.setState({ quote: this.state.data[index] });
  };

  fetchQuotes(data) {
    this.setState({ data: data.data.quotes });
    this.setRandomQuote();
  }

  componentDidMount() {
    Axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => this.fetchQuotes(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Container
          quote={this.state.quote}
          setRandomQuote={this.setRandomQuote}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
