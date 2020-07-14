import React, { Component } from "react";
import LifecycleB from "./LifcycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ishan",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shoudlcomponsent update");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifecycleA this.getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componsnetupdatedid");
  }
  changeState = () => {
    this.setState({
      name: "Name Changed",
    });
  };
  render() {
    console.log("licfecyleA render");
    return (
      <div>
        LifecycleA
        <div>
          <button onClick={this.changeState}>Change State</button>
        </div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
