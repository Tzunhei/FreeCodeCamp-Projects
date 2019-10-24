import { PLAY_SOUND } from "../constants/action-types";

const sounds = {
  lastSound: null,
  sounds_A: {
    Q: {
      id: "Q",
      keyCode: 81,
      name: "Q sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    W: {
      id: "W",
      keyCode: 87,
      name: "W sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    E: {
      id: "E",
      keyCode: 69,
      name: "E sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    A: {
      id: "A",
      keyCode: 65,
      name: "A sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    S: {
      id: "S",
      keyCode: 83,
      name: "S sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    D: {
      id: "D",
      keyCode: 68,
      name: "D sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    Z: {
      id: "Z",
      keyCode: 90,
      name: "Z sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    X: {
      id: "X",
      keyCode: 88,
      name: "X sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    C: {
      id: "C",
      keyCode: 67,
      name: "C sound",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }
  }
};

export default (state = sounds, action) => {
  switch (action.type) {
    case PLAY_SOUND:
      return {
        ...sounds,
        lastSound: state.sounds_A[action.payload].name
      };
    default:
      return state;
  }
};
