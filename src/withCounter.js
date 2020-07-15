import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// Very important concept

// it takes in the WrappedComponent and returns a NewComponent which is basically the orginal component with added functionality
// How it works is it returns a new enhanced component that passes functions, state [functionality] to the original component as props which then uses it to render something. And the New component renders that thing displaying it.
