import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentame: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childname) {
    // alert(`Hello ${this.state.parentame} from ${childname} `);
    alert("Hello " + this.state.parentame + " from " + childname);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
