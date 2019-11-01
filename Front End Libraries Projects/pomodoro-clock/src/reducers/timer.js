import {
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  RESET_TIMER,
  SET_CONFIGURATION
} from "../constants";

const initialTimer = {
  break: 5 * 60 * 1000,
  isBreak: false,
  session: 25 * 60 * 1000,
  isOn: false,
  timeLeft: 25 * 60 * 1000
};

export default (state = initialTimer, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload.option === "session") {
        return {
          ...state,
          session: state.session + action.payload.operation,
          timeLeft: state.session + action.payload.operation
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
        isOn: true
      };
    case STOP_TIMER:
      return {
        ...state,
        isOn: false
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timeLeft: state.timeLeft - 1000
      };
    case RESET_TIMER:
      return {
        break: 5,
        isBreak: 0,
        session: 25 * 60 * 1000,
        isOn: false,
        timeLeft: 25 * 60 * 1000
      };
    default:
      return state;
  }
};
