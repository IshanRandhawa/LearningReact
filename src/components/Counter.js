import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementer() {
    this.newMethod();
  }

  newMethod() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      console.log(this.state.count)
    );
  }

  incrementfive() {
    this.incrementer();
    this.incrementer();
    this.incrementer();
    this.incrementer();
    this.incrementer();
  }
  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.incrementfive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
