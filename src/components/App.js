import React from "react";
import "babel-polyfill";
import { Button, Carousel } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import TitleCard from "./TitleCard";
import ImageCarousel from "./ImageCarousel";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import { Collapse } from "react-collapse";
import { Fade, Zoom, Slide, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";
import Ionicon from "react-ionicons";
import GithubCorner from "react-github-corner";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0
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
    setInterval(() => this.changeVerb(), 1500);
    setInterval(() => this.changeAdjective(), 2000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const style = {
      color: "red",
      opacity: 0.5
    };

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

    return (
      <React.Fragment>
        <GithubCorner
          href="https://github.com/nvincenthill/portfolio"
          className="corner"
          octoColor="#222831"
          bannerColor="#EEEEEE"
          size={80}
        />
        <TitleCard />
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
