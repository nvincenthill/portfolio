import React from "react";
import GithubCorner from "react-github-corner";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import { Fade } from "react-reveal";
import "babel-polyfill";

// import { Button, Carousel } from "react-bootstrap";
// import Header from "./Header";
// import ImageCarousel from "./ImageCarousel";
// import { Collapse } from "react-collapse";
// import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0,
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  changeVerb = () => {
    this.setState({ verb: this.state.verb + 1 });
  };

  changeAdjective = () => {
    this.setState({ adjective: this.state.adjective + 1 });
  };

  componentDidMount() {
    this.verbInterval = setInterval(() => this.changeVerb(), 1500);
    this.adjectiveInterval =  setInterval(() => this.changeAdjective(), 2000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.verbInterval);
    clearInterval(this.adjectiveInterval);
  }

  render() {
    const verbs = ["designing", "building", "deploying", "maintaining"];
    const adjectives = [
      "beautiful",
      "reponsive",
      "dynamic",
      "mobile-first",
      "amazing",
      "modern",
      "slick"
    ];

    // const verbClass = true ? "bounceIn animated" : "";

    return (

      <React.Fragment>
        <GithubCorner
          href="https://github.com/nvincenthill"
          className="corner"
          octoColor="#222831"
          bannerColor="#EEEEEE"
          size={135}
        />
        <Header title="Nicholas Vincent-Hill" icon="ios-contact" buttonsHidden="true" />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div>
            <h2 className="about-tagline">
              I'm a developer <br />{" "}
              <span> {verbs[this.state.verb % verbs.length]} </span> <br />
              <span>
                {" "}
                {adjectives[this.state.adjective % adjectives.length]}{" "}
              </span>
              web applications
            </h2>
          </div>
        </Fade>
        <Blurb />
        <Fade>
          <div>
            <h2 className="about-tagline-mobile">
              I'm a developer <br />{" "}
              <span> {verbs[this.state.verb % verbs.length]} </span> <br />
              <span>
                {" "}
                {adjectives[this.state.adjective % adjectives.length]}{" "}
              </span>
              web applications
            </h2>
          </div>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
