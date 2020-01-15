import React from "react";
import "../Home/Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main_wrap">
        <div className="main_menu">
          <div className="main_name">公司简介</div>
          <div className="main_name">企业文化</div>
          <div className="main_name">联系我们</div>
        </div>
        <div className="main_box">1</div>
      </div>
    );
  }
}

export default Main;
