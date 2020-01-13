//JSX 必须要引入
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = { isLiked: false };
  }
  HandleClickOnLikeButton() {
    console.log(this.state.isLiked);
    //setState接收对象参数
    this.setState({
      isLiked: !this.state.isLiked
    });
    console.log(this.state.isLiked);
    this.setState({ count: 0 }); // => this.state.count 还是 undefined
    this.setState({ count: this.state.count + 1 }); // => undefined + 1 = NaN
    this.setState({ count: this.state.count + 2 }); // => NaN + 2 = NaN

    this.setState(prevState => {
      return { count: 0 };
    });
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
    this.setState(prevState => {
      return { count: prevState.count + 2 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.HandleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? "取消" : "点赞"}👍
        </button>
      </div>
    );
  }
}
class Index extends Component {
  render() {
    return (
      <div>
        <LikeButton />
      </div>
    );
  }
}
export default Index;
