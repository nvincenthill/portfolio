import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Projects from "./Projects";
import { spring, AnimatedSwitch } from 'react-router-transition';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 50,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const Router = () => (
  <BrowserRouter>
    <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
      >
      <Route exact path="/" component={App} />
      <Route path="/aboutme/" component={AboutMe} />
      <Route path="/projects/" component={Projects} />
      <Route component={NotFound} />
    </AnimatedSwitch>
  </BrowserRouter>
);

export default Router;
