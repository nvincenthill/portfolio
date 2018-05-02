import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import GithubCorner from "react-github-corner";

class Contact extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Row
          className={this.state.hidden ? "title_container" : "title_container"}
        >
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <Fade>
                <h1 className="about-title">
                  {" "}
                  Contact{" "}
                </h1>
              </Fade>
            </div>
          </Col>
        </Row>
        <Fade cascade>
          <Row className="contact-container">
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="logo-linkedin"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
                className="test"
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="logo-github"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="ios-mail"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="ios-call"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="logo-googleplus"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="logo-skype"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={1}>
              <Ionicon
                icon="logo-snapchat"
                color="#EEEEEE"
                fontSize="4em"
                beat={false}
                onClick={() => this.handleRoute("/")}
              />
            </Col>
          </Row>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Contact;
