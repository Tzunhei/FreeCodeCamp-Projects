import React from "react";
import "./App.css";

import Title from "./screens/Title";
import Configuration from "./screens/Configuration";
import Timer from "./screens/Timer";
import Controls from "./screens/Controls";
import Footer from "./screens/Footer";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Configuration />
      <Timer />
      <Controls />
      <Footer />
    </div>
  );
};

export default App;
