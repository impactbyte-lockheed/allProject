import {
  INCREMENT,
  DECREMENT,
  LUAS,
  KELILING
} from "../actions/square.actions";

const initialState = {
  sisi: 0,
  luas: 0,
  keliling: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        sisi: state.sisi + 1
      };
    case DECREMENT:
      return {
        ...state,
        sisi: state.sisi - 1
      };
    case LUAS:
      return {
        ...state,
        luas: state.sisi * state.sisi
      };
    case KELILING:
      return {
        ...state,
        keliling: state.sisi * 4
      };
    default:
      return state;
  }
};
