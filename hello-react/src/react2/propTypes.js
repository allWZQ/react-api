import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Index extends Component {
  static propTypes = {
    //PropTypes声明对象类型
    comment: PropTypes.object.isRequired
  };
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username}</span>
        </div>
        <p>{comment.content}</p>
      </div>
    );
  }
}
ReactDOM.render(
  <Index comment={{ username: "海绵宝宝", content: "2" }} />,
  document.getElementById("root")
);
