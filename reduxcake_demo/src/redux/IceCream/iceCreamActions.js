const { BUY_ICECREAM } = require("./iceCreamTypes");
const { INCREASE_ICECREAM } = require("./iceCreamTypes");

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const increaseIceCream = () => {
  return {
    type: INCREASE_ICECREAM,
  };
};
