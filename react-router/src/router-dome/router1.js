import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  // 显示的内容
  {
    path: "/",
    exact: true,
    main: () => <h2>1</h2>
  },
  {
    path: "/bubblegum",
    main: () => <h2>2</h2>
  },
  {
    path: "/shoelaces",
    main: () => <h2>3</h2>
  }
];

const SidebarExample = () => (
  <Router>
    <div>
      <Link to="/">
        <div className="main_name">公司简介</div>
      </Link>
      <Link to="/bubblegum">
        <div className="main_name">企业文化</div>
      </Link>
      <Link to="/shoelaces">
        <div className="main_name">联系我们</div>
      </Link>
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

export default SidebarExample;
