import { SET_CONFIGURATION } from "../constants";

const initialConfig = {
  break: 5,
  session: 25
};

export default (state = initialConfig, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload === "break") {
        return {
          ...state,
          break: state.break + action.payload.value
        };
      } else {
        return {
          ...state,
          session: state.session + action.payload.value
        };
      }
    default:
      return state;
  }
};
