import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverCounter />
      </div>
    );
  }
}

export default App;
