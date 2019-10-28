import { START_STOP_TIMER, RESET_TIMER, SET_CONFIGURATION } from "../constants";

const initialTimer = {
  timeLeft: 25 * 60,
  isRunning: false
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
    case START_STOP_TIMER:
      return state;
    case RESET_TIMER:
      return state;
    default:
      return state;
  }
};
