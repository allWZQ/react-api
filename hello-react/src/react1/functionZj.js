//JSX 必须要引入
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class HelloWorld extends Component {
  constructor() {
    super();
  }

  sayHi() {
    alert("Hello World");
  }

  render() {
    return <div onClick={this.sayHi.bind(this)}>Hello World</div>;
  }
}
const HelloWorld2 = props => {
  //函数组件当中没有constructor
  const sayHi = event => alert("Hello World");
  return <div onClick={sayHi}>Hello World</div>;
};
class Index extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld2 />
      </div>
    );
  }
}
export default Index;
