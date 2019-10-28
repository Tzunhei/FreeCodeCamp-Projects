import { SET_CONFIGURATION, START_STOP_TIMER, RESET_TIMER } from "../constants";

export const setConfiguration = (option, operation) => {
  return {
    type: SET_CONFIGURATION,
    payload: {
      option,
      operation
    }
  };
};

export const startStopTimer = option => {
  return {
    type: START_STOP_TIMER,
    payload: option
  };
};

export const resetTimer = option => {
  return {
    type: RESET_TIMER,
    payload: option
  };
};
