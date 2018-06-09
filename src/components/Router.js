import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// internal components
import App from "./App";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Contact from "./Contact";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/aboutme/" component={AboutMe} />
      <Route exact path="/Contact/" component={Contact} />
      <Route exact path="/projects/" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
