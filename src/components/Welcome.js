import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name: Name, heroName: hero } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Class Component name is {Name} a.k.a. {hero}
        </h1>
      </div>
    );
  }
}

export default Welcome;
