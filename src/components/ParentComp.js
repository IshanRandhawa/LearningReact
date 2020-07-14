import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComponents from "./PureComponent";
import MemoCompnonet from "./MemoCompnonet";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ishan",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ishan",
      });
    }, 2000);
  }
  render() {
    console.log(
      "**************************Parent*****************************"
    );
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name} />
        <PureComponents name={this.state.name} /> */}
        <MemoCompnonet name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
