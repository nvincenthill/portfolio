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
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const style = {
      color: "red",
      opacity: 0.5
    };

    return (
      <React.Fragment>
        {/* <Header /> */}
          <TitleCard />
          <NavCard handleRoute={this.handleRoute} />
          <Fade>
            <div>
              <h2 className="about-tagline">
                {" "}
                I'm a developer <br /> building beautiful
                web applications.{" "}
              </h2>
            </div>
          </Fade>
          <Blurb />
          <Fade>
            <div>
              <h2 className="about-tagline-mobile">
                {" "}
                I'm a developer <br /> building beautiful
                web applications.{" "}
              </h2>
            </div>
          </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
