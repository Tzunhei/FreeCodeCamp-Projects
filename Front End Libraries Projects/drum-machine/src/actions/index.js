import {SET_VOLUME} from "../constants/action-types";
import {PLAY_SOUND} from "../constants/action-types";

export const setVolume = value => ({
  type: SET_VOLUME,
  payload: value
});

export const playSound = sound => ({
  type: PLAY_SOUND,
  payload: sound
})