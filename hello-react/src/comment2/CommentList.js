import React, { Component } from "react";
import Comment from "../comment2/Comment";
import PropTypes from "prop-types";

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  };
  //防止没有传值  父组件
  static defaultProps = {
    comments: []
  };
  handleonDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return (
      <div>
        {/* 子组件通过this.props..接收 */}
        {this.props.comments.map((value, index) => (
          <Comment
            comment={value}
            key={index}
            index={index}
            onDeleteComment={this.handleonDeleteComment.bind(this)}
          />
        ))}
      </div>
    );
  }
}
export default CommentList;
