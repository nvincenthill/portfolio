import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import GithubCorner from "react-github-corner";
import HomeButton from "./HomeButton";
import { Collapse } from "react-collapse";
import { Well } from "react-bootstrap";

class Contact extends React.Component {
  state = {
    wellHidden: true,
    wellText: ""
  };

  handleRoute = route => {
    this.props.history.push(route);
  };

  handleClick(target) {
    if (target === "LinkedIn") {
      window.location.assign("https://www.linkedin.com/in/nvincenthill/");
    }

    if (target === "Github") {
      window.location.assign("https://github.com/nvincenthill");
    }

    if (target === "Email") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "nvincenthill@gmail.com",
          wellHidden: false
        });
      } else {
        if (this.state.wellText === "nvincenthill@gmail.com") {
          this.setState({
            wellHidden: true
          });
        } else {
          this.setState({
            wellText: "nvincenthill@gmail.com"
          });
        }
      }
    }

    if (target === "Phone") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "(541) 602-1878",
          wellHidden: false
        });
      } else {
        if (this.state.wellText === "(541) 602-1878") {
          this.setState({
            wellHidden: true
          });
        } else {
          this.setState({
            wellText: "(541) 602-1878"
          });
        }
      }
    }

    if (target === "Skype") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "nvincenthill",
          wellHidden: false
        });
      } else {
        if (this.state.wellText === "nvincenthill") {
          this.setState({
            wellHidden: true
          });
        } else {
          this.setState({
            wellText: "nvincenthill"
          });
        }
      }
    }

    if (target === "Text") {
      if (this.state.wellHidden === true) {
        this.setState({
          wellText: "Please don't text me",
          wellHidden: false
        });
      } else {
        if (this.state.wellText === "Please don't text me") {
          this.setState({
            wellHidden: true
          });
        } else {
          this.setState({
            wellText: "Please don't text me"
          });
        }
      }
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const iconSize = "6em";

    return (
      <React.Fragment>
        <Row between="xs" middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <Fade>
              <h1 className="title-name"> Contact </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} />
        </Row>
        <Fade cascade>
          <Row className="contact-container">
            <Col xs={6} sm={3} md={4} lg={1}>
              <a>
                <Ionicon
                  icon="logo-linkedin"
                  color="#0077B5"
                  fontSize={iconSize}
                  beat={false}
                  shake={false}
                  onClick={() => this.handleClick("LinkedIn")}
                  className="contact-icon"
                />
              </a>
            </Col>
            <Col xs={6} sm={3} md={4} lg={1}>
              <Ionicon
                icon="logo-github"
                color="#EEEEEE"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Github")}
                className="contact-icon"
              />
            </Col>
            <Col xs={6} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-mail"
                color="#D64A3A"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Email")}
                className="contact-icon"
              />
            </Col>
            <Col xs={6} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-call"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Phone")}
                className="contact-icon"
              />
            </Col>
            <Col xs={6} sm={3} md={4} lg={1}>
              <Ionicon
                icon="logo-skype"
                color="#00AFF0"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Skype")}
                className="contact-icon"
              />
            </Col>
            <Col xs={6} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-text"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Text")}
                className="contact-icon"
              />
            </Col>
          </Row>
          <Collapse isOpened={!this.state.wellHidden}>
            <div className="contact-well-container">
              <Well className="contact-well"> {this.state.wellText} </Well>
            </div>
          </Collapse>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Contact;
