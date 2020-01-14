import React, { Component } from "react";
import ReactDOM from "react-dom";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      //当你使用的是字符串的时候不需要把css转化成对象
      content: `<h1 style='font-size: 12px; color: red;'>React.js 小书</h1>`
    };
  }
  handleClick() {
    this.setState({
      color: "blue"
    });
  }

  render() {
    return (
      <div>
        {/* <div className="editor-wrapper">{this.state.content}</div> */}
        <div
          className="editor-wrapper"
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        />
        {/* 你需要把 CSS 属性变成一个对象再传给元素 */}
        <h1
          onClick={this.handleClick.bind(this)}
          style={{ fontSize: "12px", color: "red" }}
        >
          React.js 小书
        </h1>
      </div>
    );
  }
}
export default Editor;
