import React from "react";
import "./App.css";

import Quote from "./screens/Quote";
import Timer from "./screens/timer/Timer";
import Footer from "./screens/Footer";

const App = () => {
  return (
    <div className="App">
      <Quote />
      <Timer />
      <Footer />
    </div>
  );
};

export default App;
