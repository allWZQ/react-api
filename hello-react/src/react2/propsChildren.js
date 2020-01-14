//JSX 必须要引入
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">{this.props.children}</div>
      </div>
    );
  }
}
ReactDOM.render(
  <Card>
    <h2>React 小书</h2>
    <div>开源</div>
    订阅：
    <input />
  </Card>,
  document.getElementById("root")
);
export default Card;
