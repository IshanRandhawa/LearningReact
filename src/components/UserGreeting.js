import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Ishan</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Ishan</div>;
    // } else {
    //   return (
    //     <div>
    //       {" "}
    //       <div>
    //         <button onClick={() => this.setState({ isLoggedIn: true })}>
    //           Login
    //         </button>
    //       </div>
    //       Welcome Guest
    //     </div>
    //   );
    // }
    return this.state.isLoggedIn ? (
      <div>Welcome User</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;
