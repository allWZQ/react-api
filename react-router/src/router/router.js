import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import gsjj from "../gsjj";
import qywh from "../qywh";
import lxwm from "../lxwm";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={gsjj} />
      <Route exact path="/qywh" component={qywh} />
      <Route exact path="/lxwm" component={lxwm} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
