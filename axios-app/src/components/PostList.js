import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errormessage: "",
    };
  }
  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errormessage: "Error getting data" });
      });
  };
  render() {
    const { posts, errormessage } = this.state;

    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errormessage ? <div>{errormessage}</div> : null}
      </div>
    );
  }
}

export default PostList;
