import { SET_CONFIGURATION, SET_CHRONO } from "../constants";

export const setConfiguration = (option, operation) => {
  return {
    type: SET_CONFIGURATION,
    payload: {
      option,
      operation
    }
  };
};

export const setChrono = option => {
  return {
    type: SET_CHRONO,
    payload: option
  };
};
