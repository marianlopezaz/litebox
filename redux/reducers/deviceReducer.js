import * as types from "../types";
let initialState = {
  isMobile: false
};

const deviceRedurer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_DEVICE:
      return {
        ...state,
        isMobile: action.payload,
      };
    case types.RESET_DEVICE:
      return {
        ...state,
        isMobile: false,
      };

    default:
      return state;
  }
};

export default deviceRedurer;
