import React from "react";
import "../Home/Main.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mainlog from "../img/cut/其他/建筑大.png";

const routes = [
  // 显示的内容
  {
    path: "/",
    exact: true,
    main: () => (
      <div className="main_box1">
        <div className="main1">
          <h1>福州紫讯网络技术有限公司</h1>
          <span>
            福州紫讯网络技术有限公司成立于2015年5月25日，是一家专注于大数据挖掘，技术服务，软硬件开发销售于一体的企业。
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司自主研发了针对亚马逊卖家服务的酷鸟卖家助手，对跨境电商大数据进行分析挖掘的紫鸟数据魔方等软件。我们拥有一个充满朝气、高素质、年轻化、专业化的研发团队，为公司在软件研发领域的蓬勃发展提供源源不断的活力与动力。公司员工现有
            82
            人，本科以上科技人员占总人数的87%，主要成员均来自国内知名企业的软件开发技术精英，具有丰富的行业经验。
          </span>
          <img src={mainlog} alt="" />
        </div>
      </div>
    )
  },
  {
    path: "/bubblegum",
    main: () => <div className="main_box2">2</div>
  },
  {
    path: "/shoelaces",
    main: () => <div className="main_box3">3</div>
  }
];

const Main = () => (
  //路由跳转
  <Router>
    <div className="main_wrap">
      <div className="main_menu">
        <Link to="/">
          <div className="main_name">公司简介</div>
        </Link>

        <Link to="/bubblegum">
          <div className="main_name">企业文化</div>
        </Link>

        <Link to="/shoelaces">
          <div className="main_name">联系我们</div>
        </Link>
      </div>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default Main;
