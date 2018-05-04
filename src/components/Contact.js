import React from "react";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import HomeButton from "./HomeButton";
import { Collapse } from "react-collapse";
import { Well } from "react-bootstrap";
import Footer from "./Footer";

class Contact extends React.Component {
  state = {
    wellHidden: true,
    wellText: "",
    shake: false
  };

  handleRoute = route => {
    this.props.history.push(route);
  };

  copy() {
    const copyText = document.getElementById("contact-well-input");
    copyText.select();
    document.execCommand("Copy");
    this.deselectAll();
    this.setState({ shake: true });
    setTimeout(() => {
      this.setState({ shake: false });
    }, 750);
  }

  deselectAll() {
    var element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ("selectionStart" in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur();
    }

    if (window.getSelection) {
      // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      // IE <=8
      document.selection.empty();
    }
  }

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

    const copyIcon = (
      <div className="contact-icon-copy-container">
        <Ionicon
          icon="ios-copy"
          color="#eeeeee"
          fontSize="3em"
          beat={false}
          shake={this.state.shake}
          onClick={() => this.copy()}
          className="contact-icon-copy"
        />
      </div>
    );

    return (
      <React.Fragment>
        <Row between="xs" middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <Ionicon
                icon="ios-contact"
                color="#EEEEEE"
                fontSize="3em"
                beat={false}
                // onClick={() => this.handleClick("Github")}
                className="home-button"
              />
            </Fade>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8}>
            <Fade>
              <h1 className="title-name"> Contact </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
        </Row>

        <Fade cascade>
          <Row className="contact-container">
            <Col xs={4} sm={3} md={4} lg={1}>
              <Ionicon
                icon="logo-github"
                color="#222831"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Github")}
                className="contact-icon"
              />
            </Col>

            <Col xs={4} sm={3} md={4} lg={1}>
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

            <Col xs={4} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-call"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Phone")}
                className="contact-icon"
              />
            </Col>
            <Col xs={4} sm={3} md={4} lg={1}>
              <Ionicon
                icon="logo-skype"
                color="#00AFF0"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Skype")}
                className="contact-icon"
              />
            </Col>
            <Col xs={4} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-text"
                color="#01E64E"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Text")}
                className="contact-icon"
              />
            </Col>

            <Col xs={4} sm={3} md={4} lg={1}>
              <Ionicon
                icon="ios-mail"
                color="#D64A3A"
                fontSize={iconSize}
                beat={false}
                onClick={() => this.handleClick("Email")}
                className="contact-icon"
              />
            </Col>
          </Row>
          <Collapse isOpened={!this.state.wellHidden}>
            <div className="contact-well-container">
              <Well className="contact-well">
                <div>
                  <input
                    type="text"
                    value={this.state.wellText}
                    id="contact-well-input"
                  />
                  <br />
                  {this.state.wellText === "Please don't text me"
                    ? null
                    : copyIcon}
                </div>
              </Well>
            </div>
          </Collapse>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
