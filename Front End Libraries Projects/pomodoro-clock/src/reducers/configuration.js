import { SET_CONFIGURATION } from "../constants";

const initialConfig = {
  break: 5,
  session: 25 * 60
};

export default (state = initialConfig, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload.option === "break") {
        return {
          ...state,
          break: state.break + action.payload.operation
        };
      } else {
        return {
          ...state,
          session: state.session + action.payload.operation
        };
      }
    default:
      return state;
  }
};
