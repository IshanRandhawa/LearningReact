import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import MyWelcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinder from "./components/EventBinder";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="clark" heroName="superman" />
        <Welcome name="clark" heroName="superman" /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBinder /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <Inline /> */}
        <Form />
      </div>
    );
  }
}

export default App;
