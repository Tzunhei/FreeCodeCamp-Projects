import { SET_CONFIGURATION, SET_TIMER } from "../constants";

export const setConfiguration = (option, operation) => {
  return {
    type: SET_CONFIGURATION,
    payload: {
      option,
      operation
    }
  };
};

export const setTimer = option => {
  return {
    type: SET_TIMER,
    payload: option
  };
};
