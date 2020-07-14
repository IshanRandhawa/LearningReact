import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ishan",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shoudlcomponsent update");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifecycleB this.getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componsnetupdatedid");
  }
  render() {
    console.log("LicfecyleB render");
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}

export default LifecycleB;
