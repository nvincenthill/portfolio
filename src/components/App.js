import React from "react";

// internal components
import GithubCorner from "react-github-corner";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

// external components
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
    adjectiveClass: "animated flipInY about-tagline-adjective",
    verbClass: "animated flipInY about-tagline-verb"
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  // changeVerbState = () => {
  //   this.setState({ verb: this.state.verb + 1 });
  // };

  // changeAdjectiveState = () => {
  //   this.setState({ adjective: this.state.adjective + 1 });
  // };

  // changeVerbClassIntro = () => {
  //   this.setState({ verbClass: "animated bounceInLeft about-tagline-verb" });
  // };

  // changeVerbClassExit = () => {
  //   this.setState({ verbClass: "animated bounceOutDown about-tagline-verb" });
  // };

  // changeAdjectiveClassIntro = () => {
  //   this.setState({ adjectiveClass: "animated bounceInRight about-tagline-adjective" });
  // };

  // changeAdjectiveClassExit = () => {
  //   this.setState({ adjectiveClass: "animated bounceOutDown about-tagline-adjective" });
  // };

  // changeVerb = () => {
  //   this.verbExit = setTimeout(() => this.changeVerbClassExit(), 500);
  //   this.verbExit = setTimeout(() => this.changeVerbState(), 1000);
  //   this.verbExit = setTimeout(() => this.changeVerbClassIntro(), 1000);
  // };

  // changeAdjective = () => {
  //   this.verbExit = setTimeout(() => this.changeAdjectiveClassExit(), 500);
  //   this.verbExit = setTimeout(() => this.changeAdjectiveState(), 1000);
  //   this.verbExit = setTimeout(() => this.changeAdjectiveClassIntro(), 1000);
  // };

  // componentDidMount() {
  //   this.changeVerb();
  //   this.changeVerbInterval = setInterval(() => this.changeVerb(), 3000);;
  //   this.changeAdjective();
  //   this.changeAdjectiveInterval = setInterval(() => this.changeAdjective(), 3000);;

  // this.verbInterval = setInterval(() => this.changeVerb(), 1500);
  // this.adjectiveInterval = setInterval(() => this.changeAdjective(), 1500);

  // this.verbClassInterval = setInterval(() => this.changeVerbClass(), 2000);
  // this.adjectiveClassInterval = setInterval(() => this.changeAdjectiveClass(), 2000);
  // };

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
        <Header
          title="Nicholas Vincent-Hill"
          icon="ios-contact"
          buttonsHidden="true"
        />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div>
            <h2 className="about-tagline">
              I'm a <span className="developer">developer</span> <br /> designing responsive<br />
              mobile-first web applications
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
      </React.Fragment>
    );
  }
}

export default App;
