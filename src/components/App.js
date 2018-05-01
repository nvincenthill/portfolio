import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button, Carousel } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import TitleCard from "./TitleCard";
import ImageCarousel from "./ImageCarousel";
import NavCard from "./NavCard";
import { Collapse } from "react-collapse";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";
import Ionicon from "react-ionicons";
import GithubCorner from "react-github-corner";

// import Footer from "./Footer";

class App extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <GithubCorner
          className="corner"
          href="https://github.com/nvincenthill/portfolio"
          octoColor="#222831"
          bannerColor="#EEEEEE"
        />
        <TitleCard />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <ImageCarousel />
        </Fade>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
