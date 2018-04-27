import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Collapse } from "react-collapse";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketch";

// import Footer from "./Footer";

class TitleCard extends React.Component {
  state = {
    hidden: false
  };

  handleScroll = event => {
    console.log(window.scrollY, window.innerHeight, window.screenTop, window.screenY)

    let elementTarget = document.getElementById("title_name");
    // console.log(elementTarget.offsetTop, window.scrollY);
    if (
      window.scrollY > 0
    ) {
      this.setState({
        hidden: true
      });
    } else {
      this.setState({
        hidden: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
          <Row
            className={
              this.state.hidden
                ? "title_container"
                : "title_container"
            }
          >
            <Col xs={12} sm={12} md={12} lg={12}>
              <div id="title_name">
                <h1>Nicholas Vincent-Hill</h1>
              </div>
              <h2 id="title_desc">Trader | Developer | Flâneur</h2>
            </Col>
          </Row>
          </React.Fragment>
    );
  }
}

export default TitleCard;
