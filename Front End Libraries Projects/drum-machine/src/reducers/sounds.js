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
      src: "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
    },
    E: {
      id: "E",
      keyCode: 69,
      name: "E sound",
      src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav"
    },
    A: {
      id: "A",
      keyCode: 65,
      name: "A sound",
      src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav"
    },
    S: {
      id: "S",
      keyCode: 83,
      name: "S sound",
      src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav"
    },
    D: {
      id: "D",
      keyCode: 68,
      name: "D sound",
      src: "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav"
    },
    Z: {
      id: "Z",
      keyCode: 90,
      name: "Z sound",
      src: "http://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg"
    },
    X: {
      id: "X",
      keyCode: 88,
      name: "X sound",
      src: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg"
    },
    C: {
      id: "C",
      keyCode: 67,
      name: "C sound",
      src: "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg"
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
