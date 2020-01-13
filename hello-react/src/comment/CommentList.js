import React, { Component } from "react";
import Comment from "../comment/Comment";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    return (
      <div>
        {this.props.comments.map((value, index) => (
          <Comment comment={value} key={index} />
        ))}
      </div>
    );
  }
}

export default CommentList;
