import { START_CHRONO, STOP_CHRONO, REFRESH_CHRONO } from "../constants";

export default (state, action) => {
  switch (action.type) {
    case START_CHRONO:
      return state;
    case STOP_CHRONO:
      return state;
    case REFRESH_CHRONO:
      return state;
    default:
      break;
  }
};
