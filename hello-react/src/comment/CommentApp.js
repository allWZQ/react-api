import React, { Component } from "react";
import CommentInput from "../comment/CommentInput";
import CommentList from "../comment/CommentList";

class CommentApp extends Component {
  constructor() {
    super();
    //子组件传值给父组件,父组件将值暂存起来
    this.state = {
      comments: []
    };
  }

  handleSubmitComment(comment) {
    if (!comment) return;

    if (!comment.username) return alert("请输入用户名");

    if (!comment.content) return alert("请输入评论内容");

    this.state.comments.push(comment);

    this.setState({
      comments: this.state.comments
    });
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />

        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
