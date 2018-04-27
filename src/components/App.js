import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import TitleCard from "./TitleCard";
import NavCard from "./NavCard";
import { Collapse } from "react-collapse";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";
import Ionicon from "react-ionicons";

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
        <TitleCard />
        <NavCard handleRoute={this.handleRoute} />
        {/* <Footer /> */}
        <Fade>
          <div className="title_image_container">
            <img
              className="title_image"
              src="../images/nick.jpeg"
              alt="Did not load"
            />
            <p className="title_image_text">
              Hello, I'm Nick. <br /> Welcome to my site.{" "}
            </p>{" "}
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default App;
