import React from "react";
import "./App.css";

import Title from "./screens/Title";
import Configuration from "./screens/Configuration";
import Clock from "./screens/Clock";
import Controls from "./screens/Controls";
import Footer from "./screens/Footer";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Configuration />
      <Clock />
      <Controls />
      <Footer />
    </div>
  );
};

export default App;
