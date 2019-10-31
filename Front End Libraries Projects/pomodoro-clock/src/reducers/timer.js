import {
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  RESET_TIMER,
  SET_CONFIGURATION
} from "../constants";

const initialTimer = {
  break: 5,
  session: 25 * 60 * 1000,
  isRunning: false,
  currentDate: 0,
  timeLeft: 0
};

export default (state = initialTimer, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload.option === "session") {
        return {
          ...state,
          session: state.session + action.payload.operation
        };
      } else {
        return {
          ...state,
          break: state.break + action.payload.operation
        };
      }
    case START_TIMER:
      return {
        ...state,
        currentDate: Date.now(),
        timeLeft: state.currentDate + state.session,
        isRunning: true
      };
    case STOP_TIMER:
      console.log(state);
      return {
        ...state,
        isRunning: false
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timeLeft: state.currentDate + state.session - action.payload.date
      };
    case RESET_TIMER:
      return {
        break: 5,
        session: 25 * 60 * 1000,
        isRunning: false,
        currentDate: 0,
        timeLeft: 0
      };
    default:
      return state;
  }
};
