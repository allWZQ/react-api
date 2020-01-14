//JSX 必须要引入
import React, { Component } from "react";
import "./index.css";

const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" }
];
class User extends Component {
  render() {
    //子组件接收user
    const { user } = this.props;
    return (
      <div>
        <div>姓名：{user.username}</div>,<div>年龄：{user.age}</div>,
        <div>{user.gender}</div>
      </div>
    );
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        {/* 父组件传值 传的是map的值*/}
        {users.map((value, index) => (
          <User user={value} key={index} />
        ))}
      </div>
    );
  }
}
export default Index;
