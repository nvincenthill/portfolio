import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Contact from "./Contact";
// import { spring, AnimatedSwitch, AnimatedRoute } from "react-router-transition";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// we need to map the `scale` prop we define below
// // to the transform style property
// function mapStyles(styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `scale(${styles.scale})`,
//   };
// }

// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 330,
//     damping: 22,
//   });
// }

// // child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
//     scale: 1.2,
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: bounce(0),
//     scale: bounce(0.8),
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: bounce(1),
//     scale: bounce(1),
//   },
// };

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
