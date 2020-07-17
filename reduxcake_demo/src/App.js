import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
