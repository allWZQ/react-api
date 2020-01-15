import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "../src/Home/Nav";
import Footer from "../src/Home/Footer";
import Main from "../src/Home/Main";
import aboutLog from "../src/img/cut/其他/图层7副本.png";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <Nav />
        <img className="aboutlog" src={aboutLog} alt="" />
        <div className="footer">
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
