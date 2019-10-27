import { combineReducers } from "redux";
import configuration from "./configuration";
import timer from "./timer";

export default combineReducers({
  configuration,
  timer
});
