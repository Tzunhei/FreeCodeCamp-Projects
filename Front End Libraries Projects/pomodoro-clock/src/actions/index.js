import {
  SET_CONFIGURATION,
  START_STOP_TIMER,
  UPDATE_TIMER,
  RESET_TIMER
} from "../constants";

export const setConfiguration = (option, operation) => {
  return {
    type: SET_CONFIGURATION,
    payload: {
      option,
      operation
    }
  };
};

export const startStopTimer = () => {
  return {
    type: START_STOP_TIMER
  };
};

export const updateTimer = date => {
  return {
    type: UPDATE_TIMER,
    payload: {
      date
    }
  };
};

export const resetTimer = option => {
  return {
    type: RESET_TIMER,
    payload: {
      option
    }
  };
};
