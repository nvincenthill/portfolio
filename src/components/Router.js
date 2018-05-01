import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Contact from "./Contact";
// import { spring, AnimatedSwitch, AnimatedRoute } from "react-router-transition";

const Router = () => (
  <BrowserRouter>
  <Switch>
      <Route
        exact path="/"
        component={App}
      />
      <Route path="/aboutme/" component={AboutMe} />
      <Route
        path="/projects/"
        component={Projects}
      />
      <Route
        path="/Contact/"
        component={Contact}
      />
      <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default Router;
