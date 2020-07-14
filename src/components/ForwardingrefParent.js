import React, { Component } from "react";
import FRInput from "./FRInput";

class ForwardingrefParent extends Component {
  constructor(props) {
    super(props);

    this.childInpref = React.createRef();
  }
  focusHandle = () => {
    console.log(this.childInpref);
    this.childInpref.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.childInpref} />
        <button onClick={this.focusHandle}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardingrefParent;
