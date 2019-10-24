import {SET_VOLUME} from "../constants/action-types";

export default (state = 50, action) => {
  switch(action.type){
    case SET_VOLUME:
      return action.payload;
    default:
      return state;
  }
}