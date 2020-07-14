import React, { Component } from "react";
import "./myStyles.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  //   handleCommentChange(event) {
  //     this.setState({
  //       comment: event.target.value,
  //     });
  //   }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.submitHandler} className="primary">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Ang</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
