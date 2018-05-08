import React from "react";
// import { Fade } from "react-reveal";
import Ionicon from "react-ionicons";
// import HomeButton from "./HomeButton";
import { Collapse } from "react-collapse";
// import { Well } from "react-bootstrap";
// import Footer from "./Footer";
import Header from "./Header";
import MapContainer from "./MapContainer";
import MediaQuery from "react-responsive";

class Contact extends React.Component {
  state = {
    title: "Contact",
    wellHidden: true,
    wellText: "nvincenthill@gmail.com",
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
      this.setState({ wellText: "nvincenthill@gmail.com" });
      this.setState({ wellHidden: false });
    }

    if (target === "Phone") {
      this.setState({ wellText: "(541) 602-1878" });
      this.setState({ wellHidden: false });
    }

    if (target === "Skype") {
      this.setState({ wellText: "nvincenthill" });
      this.setState({ wellHidden: false });
    }

    if (target === "Text") {
      this.setState({ wellText: "Please don't text me" });
      this.setState({ wellHidden: false });
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
          fontSize="2em"
          beat={false}
          shake={this.state.shake}
          onClick={() => this.copy()}
          className="contact-icon-copy"
        />
      </div>
    );

    // const lgSize = 12;
    // const mdSize = 6;
    // const xsSize = 2;

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
      <a href="mailto: nvincenthill@gmail.com">
        <Ionicon
          icon="ios-mail"
          color="#D64A3A"
          fontSize={iconSize}
          beat={false}
          onClick={() => this.handleClick("Email")}
          className="contact-icon"
        />
      </a>
    );

    return (
      <React.Fragment>
        {/* Header Message */}

        <Header title="Contact" icon="ios-contact" />

        {/* Mobile Phones */}

        <MediaQuery maxDeviceWidth={600} orientation="portrait">
          {/* Greeting Message */}
          <div className="contact-greeting-container">
            <h2 className="contact-greeting-heading">Hello! </h2>
            <p className="contact-greeting-body">
              {" "}
              I'd love to talk to you! <br /> Please send me an email <br /> and
              I'll get back to you <br /> as soon as possible.
            </p>
            <h2 className="contact-greeting-footer"> -Nick </h2>
          </div>

          {/* Contact Information */}

          <Collapse isOpened={!this.state.wellHidden}>
            <div className="contact-well">
              <input id="contact-well-input" value={this.state.wellText} />
            </div>
          </Collapse>

          {/* Contact Buttons */}

          <div className="contact-container">
            {githubIcon}
            {linkedInIcon}
            {mailIcon}
          </div>
        </MediaQuery>

        {/* Tablets */}

        <MediaQuery minDeviceWidth={601} orientation="portrait">
          {/* Greeting Message */}
          <MapContainer
            style={this.state.style}
            mapType={this.state.mapType}
            onClick={null}
          />
          <div className="contact-greeting-container">
            <h2 className="contact-greeting-heading">Hello! </h2>
            <p className="contact-greeting-body">
              {" "}
              I'd love to talk to you! <br /> Please send me an email <br /> and
              I'll get back to you <br /> as soon as possible.
            </p>
            <h2 className="contact-greeting-footer"> -Nick </h2>
          </div>

          {/* Contact Information */}

          <Collapse isOpened={!this.state.wellHidden}>
            <div className="contact-well">
              <input onChange={null} id="contact-well-input" value={this.state.wellText} />
              {copyIcon}
            </div>
          </Collapse>

          {/* Contact Buttons */}

          <div className="contact-container">
            {githubIcon}
            {linkedInIcon}
            {callIcon}
            {skypeIcon}
            {chatIcon}
            {mailIcon}
          </div>
        </MediaQuery>

        {/* Desktops */}

        <MediaQuery minDeviceWidth={809}>
          {/* Greeting Message */}
          <MapContainer
            style={this.state.style}
            mapType={this.state.mapType}
            onClick={null}
          />
          <div className="contact-greeting-container">
            <h2 className="contact-greeting-heading">Hello! </h2>
            <p className="contact-greeting-body">
              {" "}
              I'd love to talk to you! <br /> Please send me an email <br /> and
              I'll get back to you <br /> as soon as possible.
            </p>
            <h2 className="contact-greeting-footer"> -Nick </h2>
          </div>

          {/* Contact Information */}

          <Collapse isOpened={!this.state.wellHidden}>
            <div className="contact-well">
              <input id="contact-well-input" value={this.state.wellText} />
              {copyIcon}
            </div>
          </Collapse>

          {/* Contact Buttons */}

          <div className="contact-container">
            {githubIcon}
            {linkedInIcon}
            {callIcon}
            {skypeIcon}
            {chatIcon}
            {mailIcon}
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}

export default Contact;
