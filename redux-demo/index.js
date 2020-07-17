const redux = require("redux");
const reduxLogger = require("redux-logger");

const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "redux action",
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
// reducers describes how actions change state

// (prevState, action) => newState

const initialCakeState = {
  numOfCake: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
      console.log(store.getState());
  }
};
// ...spread operator is now basically equal to the object except numOfCake key state

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IcecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
console.log(store.getState());
