const { INCREASE_ICECREAM } = require("./iceCreamTypes");

const initialState = {
  numOfIceCreams: 20,
};

const increaseIceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ICECREAM:
      return {
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
};

export default increaseIceCreamReducer;
