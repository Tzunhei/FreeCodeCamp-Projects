import {
  START_TIMER,
  STOP_TIMER,
  REFRESH_TIMER,
  SET_CONFIGURATION
} from "../constants";

const initialTimer = {
  timeLeft: 25
};

export default (state = initialTimer, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload.option === "session") {
        return {
          timeLeft: state.timeLeft + action.payload.operation
        };
      }
      return state;
    case START_TIMER:
      return state;
    case STOP_TIMER:
      return state;
    case REFRESH_TIMER:
      return state;
    default:
      return state;
  }
};
