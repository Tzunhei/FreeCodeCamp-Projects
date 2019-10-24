import { combineReducers } from "redux";

import volume from "./volume";
import sounds from "./sounds";

export default combineReducers({
  volume,
  sounds
});
