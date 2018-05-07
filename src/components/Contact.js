import React from "react";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import HomeButton from "./HomeButton";
import { Collapse } from "react-collapse";
import { Well } from "react-bootstrap";
import Footer from "./Footer";
import MapContainer from "./MapContainer";

class Contact extends React.Component {
  state = {
    title: "Contact",
    wellHidden: true,
    wellText: "",
    shake: false,
    icon: "ios-moon",
    mapType: "normal",
    githubColor: "#EEEEEE",
    style: {
      normal: [
        {
          featureType: "administrative",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#e3e3e3"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              color: "#cccccc"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station.airport",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station.airport",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#01AFF0"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    }
  };

  changeMap() {
    if (this.state.icon === "ios-sunny") {
      this.setState({ icon: "ios-moon" });
      this.setState({ mapType: "night" });
      this.setState({ githubColor: "#EEEEEE" });
    } else {
      this.setState({ icon: "ios-sunny" });
      this.setState({ mapType: "normal" });
      this.setState({ githubColor: "#222831" });
    }
  }

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
    }

    if (target === "Phone") {
    }

    if (target === "Skype") {
    }

    if (target === "Text") {
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const iconSize = "4em";

    const copyIcon = (
      <div className="contact-icon-copy-container">
        <Ionicon
          icon="ios-copy"
          color="#eeeeee"
          fontSize="3em"
          beat={false}
          shake={this.state.shake}
          onClick={() => this.copy()}
          // className="contact-icon-copy"
        />
      </div>
    );

    const lgSize = 12;
    const mdSize = 6;
    const xsSize = 4;
    const githubIcon = (
        <Ionicon
          icon="logo-github"
          color={"#222831"}
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Github")}
          className="contact-icon"
        />
    );

    const linkedInIcon = (
          <Ionicon
            icon="logo-linkedin"
            color="#0077B5"
            fontSize={iconSize}
            beat={false}
            shake={false}
            onClick={() => this.handleClick("LinkedIn")}
            className="contact-icon"
          />
    );

    const callIcon = (
        <Ionicon
          icon="ios-call"
          color="#01E64E"
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Phone")}
          className="contact-icon"
        />
    );

    const skypeIcon = (
        <Ionicon
          icon="logo-skype"
          color="#00AFF0"
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Skype")}
          className="contact-icon"
        />
    );
    const chatIcon = (
        <Ionicon
          icon="ios-text"
          color="#01E64E"
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Text")}
          className="contact-icon"
        />
    );

    const mailIcon = (
        <Ionicon
          icon="ios-mail"
          color="#D64A3A"
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Email")}
          className="contact-icon"
        />
    );

    const header = (
      <Row between="xs" middle="xs" className={"title_container"}>
        <Col xs={2} sm={2} md={2} lg={2} />
        <Col xs={6} sm={5} md={5} lg={8}>
          <Fade>
            <h1 className="title-name">Contact</h1>
          </Fade>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Fade>
            <HomeButton />
          </Fade>
        </Col>
      </Row>
    );

    return (
      <React.Fragment>
        {header}
        <Row className="contact-body">
          <Col xs={12} sm={12} md={12} lg={12}>
            <MapContainer
              style={this.state.style}
              mapType={this.state.mapType}
              onClick={null}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Fade>
              <Row between="xs" middle="xs" className="contact-container">
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                  {githubIcon}
                </Col>
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                {linkedInIcon}
                </Col>
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                  {callIcon}
                </Col>
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                  {skypeIcon}
                </Col>
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                  {chatIcon}
                </Col>
                <Col xs={xsSize} sm={mdSize} md={1} lg={1}>
                  {mailIcon}
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
