//JSX 必须要引入
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Title extends Component {
  HandleClickOnTitle(word, e) {
    console.log("click on title");
    console.log(e.target.innerHTML);
    console.log(this); //title
    console.log(this, word);
  }
  render() {
    //如果需要改变this 需要用到bind bind将this绑定在当前实例上
    return (
      <h1 onClick={this.HandleClickOnTitle.bind(this, "hello")}>我是title</h1>
    );
  }
}
class Header extends Component {
  render() {
    const word = "hello";
    const className = "header";
    const isGoodWrad = true;
    const goodWord = <strong>is good</strong>;
    const badWord = <span>is not good</span>;
    return (
      //与vue模板语法类似需要最外层包裹
      <div className={className}>
        <h1>React 小书{word}</h1>
        <h1>
          {/* 你不能直接放入一个函数,你的返回他 */}
          {(function() {
            return "2020.1.13";
          })()}
        </h1>
        <h1>
          {/* 三元表达式 */}
          {isGoodWrad ? <strong>is good</strong> : <span>is not good</span>}
          {/* null隐藏元素 */}
          {isGoodWrad ? <strong>is good</strong> : null}
        </h1>
        {/* 元素变量jsx */}
        <h1>{isGoodWrad ? goodWord : badWord}</h1>
        <Title />
        <Title />
        <hr />
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div>
        <h1>我是main</h1>
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <div>
        <h1>我是footer</h1>
      </div>
    );
  }
}
class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default Index;
