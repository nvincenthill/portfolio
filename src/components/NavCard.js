import React from "react";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Collapse } from "react-collapse";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import sketch from "../sketch";

class NavCard extends React.Component {
  state = {
    hidden: true
  };

  handleScroll = event => {
    let elementTarget = document.getElementById("title_name");
    // console.log(elementTarget.offsetTop, window.scrollY);
    if (
      window.scrollY > window.innerHeight / 3 &&
      window.scrollY < window.innerHeight / 2
    ) {
      this.setState({
        hidden: false
      });
    } else {
      this.setState({
        hidden: true
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
      <Fade>
        <Row className={this.state.hidden ? "nav_container" : "nav_container"}>
          <Col xs={12} sm={6} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("AboutMe")}
            >
              About
            </button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Projects")}
            >
              Projects
            </button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <a href="/images/Nicholas W. Vincent-Hill Resume 04-15-2018.pdf"><button
              className="nav_button">
              Resume
            </button>
            </a>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Contact")}
            >
              Contact
            </button>
          </Col>
        </Row>
      </Fade>
    );
  }
}

export default NavCard;
