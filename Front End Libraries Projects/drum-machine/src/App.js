import React from "react";
import "./App.css";
import DrumContainer from "./screens/DrumContainer";

import { Provider } from "react-redux";
import store from "./store";

const fancyLog = () => {
  console.log("%c Rendered with 👉 👉 👇 ", "background: purple; color: #FFF");
  console.log(store.getState());
};

const App = () => {
  fancyLog();
  return (
    <Provider store={store}>
      <DrumContainer />
    </Provider>
  );
};

export default App;
