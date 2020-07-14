import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inpuRef = React.createRef();
  }
  focusInput = () => {
    this.inpuRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inpuRef} />{" "}
      </div>
    );
  }
}

export default Input;
// inputRef here refers only to the Input field
