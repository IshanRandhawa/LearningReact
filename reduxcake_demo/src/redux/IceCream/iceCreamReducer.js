const { BUY_ICECREAM } = require("./iceCreamTypes");
const { INCREASE_ICECREAM } = require("./iceCreamTypes");

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case INCREASE_ICECREAM:
      return {
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
